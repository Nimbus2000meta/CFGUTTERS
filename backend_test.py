import requests
import json
import time
from datetime import datetime

# Get the backend URL from the frontend .env file
def get_backend_url():
    with open('/app/frontend/.env', 'r') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                return line.strip().split('=')[1].strip('"\'')
    raise ValueError("Could not find REACT_APP_BACKEND_URL in frontend/.env")

BACKEND_URL = get_backend_url()
API_URL = f"{BACKEND_URL}/api"

def test_root_endpoint():
    """Test the root endpoint GET /api/"""
    print("\n=== Testing GET /api/ endpoint ===")
    try:
        response = requests.get(f"{API_URL}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200
        assert "message" in response.json()
        assert response.json()["message"] == "Hello World"
        
        print("✅ GET /api/ endpoint test passed!")
        return True
    except Exception as e:
        print(f"❌ GET /api/ endpoint test failed: {str(e)}")
        return False

def test_create_status_check():
    """Test the POST /api/status endpoint"""
    print("\n=== Testing POST /api/status endpoint ===")
    try:
        client_name = f"test_client_{int(time.time())}"
        payload = {"client_name": client_name}
        
        response = requests.post(f"{API_URL}/status", json=payload)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200
        assert "id" in response.json()
        assert response.json()["client_name"] == client_name
        assert "timestamp" in response.json()
        
        print("✅ POST /api/status endpoint test passed!")
        return True, client_name
    except Exception as e:
        print(f"❌ POST /api/status endpoint test failed: {str(e)}")
        return False, None

def test_get_status_checks(expected_client_name=None):
    """Test the GET /api/status endpoint"""
    print("\n=== Testing GET /api/status endpoint ===")
    try:
        response = requests.get(f"{API_URL}/status")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200
        assert isinstance(response.json(), list)
        
        if expected_client_name and response.json():
            # Check if our recently created status check is in the list
            client_names = [item["client_name"] for item in response.json()]
            assert expected_client_name in client_names, f"Expected client name {expected_client_name} not found in response"
        
        print("✅ GET /api/status endpoint test passed!")
        return True
    except Exception as e:
        print(f"❌ GET /api/status endpoint test failed: {str(e)}")
        return False

def test_mongodb_connection():
    """Test MongoDB connection through API endpoints"""
    print("\n=== Testing MongoDB Connection ===")
    try:
        # First create a status check
        create_success, client_name = test_create_status_check()
        if not create_success:
            raise Exception("Failed to create status check, MongoDB connection might be failing")
        
        # Then retrieve it to verify persistence
        get_success = test_get_status_checks(expected_client_name=client_name)
        if not get_success:
            raise Exception("Failed to retrieve status checks, MongoDB connection might be failing")
        
        # Test connection stability with multiple consecutive requests
        print("\n=== Testing MongoDB Connection Stability ===")
        for i in range(3):
            print(f"Stability test iteration {i+1}/3")
            # Create another status check
            create_success, another_client_name = test_create_status_check()
            if not create_success:
                raise Exception(f"Failed to create status check on iteration {i+1}, MongoDB connection might be unstable")
            
            # Verify it was saved
            get_success = test_get_status_checks(expected_client_name=another_client_name)
            if not get_success:
                raise Exception(f"Failed to retrieve status checks on iteration {i+1}, MongoDB connection might be unstable")
        
        print("✅ MongoDB connection test passed!")
        return True
    except Exception as e:
        print(f"❌ MongoDB connection test failed: {str(e)}")
        return False

def test_fastapi_server():
    """Test if FastAPI server is running with CORS middleware"""
    print("\n=== Testing FastAPI Server with CORS middleware ===")
    try:
        # Test a simple request to check if server is running
        response = requests.get(f"{API_URL}/")
        assert response.status_code == 200
        
        # Test CORS preflight request
        headers = {
            "Origin": "http://example.com",
            "Access-Control-Request-Method": "GET",
            "Access-Control-Request-Headers": "Content-Type"
        }
        options_response = requests.options(f"{API_URL}/", headers=headers)
        print(f"OPTIONS Status Code: {options_response.status_code}")
        print(f"OPTIONS Headers: {dict(options_response.headers)}")
        
        # Verify CORS headers are present and correct
        assert options_response.status_code == 200, "OPTIONS request should return 200 OK"
        assert "Access-Control-Allow-Origin" in options_response.headers, "Missing Access-Control-Allow-Origin header"
        assert "Access-Control-Allow-Methods" in options_response.headers, "Missing Access-Control-Allow-Methods header"
        assert "Access-Control-Allow-Headers" in options_response.headers, "Missing Access-Control-Allow-Headers header"
        
        # Test actual CORS request
        cors_headers = {"Origin": "http://example.com"}
        cors_response = requests.get(f"{API_URL}/", headers=cors_headers)
        print(f"CORS GET Status Code: {cors_response.status_code}")
        print(f"CORS GET Headers: {dict(cors_response.headers)}")
        
        assert cors_response.status_code == 200, "CORS GET request should return 200 OK"
        assert "Access-Control-Allow-Origin" in cors_response.headers, "Missing Access-Control-Allow-Origin header in actual request"
        
        print("✅ FastAPI Server is running with CORS middleware properly configured!")
        return True
    except AssertionError as ae:
        print(f"❌ CORS middleware test failed: {str(ae)}")
        return False
    except Exception as e:
        print(f"❌ FastAPI Server test failed: {str(e)}")
        return False

def run_all_tests():
    """Run all tests and return results"""
    print(f"Testing backend API at: {API_URL}")
    
    results = {
        "FastAPI Server with CORS middleware": test_fastapi_server(),
        "GET /api/ endpoint": test_root_endpoint(),
        "MongoDB Connection": test_mongodb_connection(),
        # Note: POST /api/status and GET /api/status are tested as part of MongoDB connection test
        "POST /api/status endpoint": None,  # Will be updated below
        "GET /api/status endpoint": None,   # Will be updated below
    }
    
    # Run individual endpoint tests if they weren't already successful in the MongoDB test
    if results["MongoDB Connection"]:
        results["POST /api/status endpoint"] = True
        results["GET /api/status endpoint"] = True
    else:
        # Try testing endpoints individually
        post_result, _ = test_create_status_check()
        results["POST /api/status endpoint"] = post_result
        results["GET /api/status endpoint"] = test_get_status_checks()
    
    return results

if __name__ == "__main__":
    print("Starting backend API tests...")
    test_results = run_all_tests()
    
    print("\n=== Test Summary ===")
    for test_name, passed in test_results.items():
        status = "✅ PASSED" if passed else "❌ FAILED"
        print(f"{test_name}: {status}")
    
    # Overall result
    all_passed = all(test_results.values())
    print(f"\nOverall Test Result: {'✅ ALL TESTS PASSED' if all_passed else '❌ SOME TESTS FAILED'}")