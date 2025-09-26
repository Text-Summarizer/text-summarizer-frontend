# Text Summarizer Frontend

A modern, responsive text summarization application built with React, TypeScript, and Radix UI with a beautiful lime-themed design.

## Features

-   🌟 **Modern UI**: Clean, responsive interface with lime-based color theme
-   ⚡ **Real-time Summarization**: Connect to your local backend API
-   🎨 **Radix UI Components**: Accessible and well-designed UI components
-   📱 **Mobile Friendly**: Fully responsive design
-   ✨ **Loading States**: Visual feedback during API calls
-   🚨 **Error Handling**: User-friendly error messages
-   📋 **Copy to Clipboard**: Easy copying of generated summaries

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn
-   A backend server running on `http://localhost:8000` with a `/summarize` endpoint

### Installation

1. Clone the repository and navigate to the project directory
2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

### Backend API Requirements

Your backend server should expose a POST endpoint at `/summarize` that:

-   Accepts JSON payload: `{ "text": "your text here" }`
-   Returns JSON response with the summary in one of these formats:
    -   `{ "summary": "summarized text" }`
    -   `{ "summarized_text": "summarized text" }`
    -   `{ "result": "summarized text" }`

Example backend endpoint (Python Flask):

```python
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data.get('text', '')

    # Your summarization logic here
    summary = your_summarization_function(text)

    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(port=8000)
```

## Configuration

You can modify the API configuration in `src/config/api.ts`:

```typescript
export const API_CONFIG = {
    BASE_URL: "http://localhost:8000", // Change this to your backend URL
    ENDPOINTS: {
        SUMMARIZE: "/summarize", // Change this to your endpoint path
    },
    TIMEOUT: 30000, // Request timeout in milliseconds
};
```

## Usage

1. **Enter Text**: Paste or type your text into the input textarea
2. **Summarize**: Click the "Summarize Text" button to generate a summary
3. **View Results**: The summarized text will appear in the results section
4. **Copy Summary**: Use the "Copy Summary" button to copy the result
5. **Clear All**: Reset the form with the "Clear All" button

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Technology Stack

-   **React 19** - UI framework
-   **TypeScript** - Type safety
-   **Vite** - Build tool and dev server
-   **Radix UI** - Accessible UI components
-   **CSS Variables** - Theming system
-   **Modern CSS** - Grid, Flexbox, and modern properties

## Color Theme

The application uses a lime-based color theme with the following palette:

-   **Primary**: Lime green variants (#84cc16 to #365314)
-   **Neutral**: Gray variants for text and backgrounds
-   **Gradients**: Subtle gradients for visual appeal

## Browser Support

-   Chrome/Edge 88+
-   Firefox 78+
-   Safari 14+

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
