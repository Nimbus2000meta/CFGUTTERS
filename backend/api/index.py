from fastapi import FastAPI, Request, Response
from fastapi.responses import JSONResponse
from typing import Dict, Any
import json
import os
from datetime import datetime
import urllib.request
import urllib.parse

app = FastAPI()

@app.middleware("http")
async def add_cors_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "*"
    return response

@app.options("/{path:path}")
async def options_handler(path: str):
    return JSONResponse(
        content={"message": "OK"},
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        }
    )

@app.get("/")
async def root():
    return {"message": "CF Gutters Backend API", "status": "running"}

@app.get("/api/")
async def api_root():
    return {"message": "Hello World"}

@app.post("/api/contact")
async def submit_contact_form(request: Request):
    try:
        data = await request.json()
        # For now, just return success
        # Email sending will be added once this works
        return {"success": True, "message": "Form submitted successfully", "received": data.get("fullName", "Unknown")}
    except Exception as e:
        return {"success": False, "message": str(e)}

@app.post("/api/contact-test")
async def test_contact_form(request: Request):
    try:
        data = await request.json()
        return {"success": True, "message": "Test successful", "name": data.get("fullName", "Unknown")}
    except Exception as e:
        return {"success": False, "message": str(e)}
