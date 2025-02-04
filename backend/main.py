import uvicorn
from typing import Final

# Constants
HOST: Final[str] = "0.0.0.0"
PORT: Final[int] = 8000

if __name__ == "__main__":
    print(f"Starting server on http://{HOST}:{PORT}")
    uvicorn.run(
        "app.api:app",
        host=HOST,
        port=PORT,
        reload=True,
        log_level="info"
    )