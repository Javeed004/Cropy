# Cropy — Crop Recommendation System 🌾

A full-stack web application that empowers farmers and agricultural professionals with ML-driven crop recommendations — analyzing soil composition, weather conditions, and water availability to suggest the most suitable crops for any given field.

## 🚀 Features

- 🌱 **Smart Crop Recommendations** — Suggests the best crops based on soil type, weather, and water conditions
- ⚡ **Real-Time Predictions** — Instantly processes user inputs and returns ML model results
- 🖥️ **User-Friendly Interface** — Clean React-based UI built for farmers and agri-professionals
- 🗄️ **Lightweight Data Storage** — Crop data managed in JSON format for easy updates
- 🔗 **Flask REST API** — Decoupled backend serving predictions via API endpoints
- 📊 **Data-Driven Decisions** — Helps optimize yields and promote sustainable farming practices

## 🎯 How It Works

1. **User Input** → Enter soil parameters, weather data, and water availability
2. **API Request** → Frontend sends data to the Flask backend
3. **ML Inference** → Scikit-learn model processes the inputs
4. **Recommendation** → Best-fit crop is returned and displayed
5. **Informed Decision** → Farmer acts on data-backed crop suggestion

## 📦 Installation

### Prerequisites

- Node.js (v16+)
- Python 3.8+
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/Javeed004/Cropy.git
cd Cropy
```

### 2. Set Up the Frontend (Client)

```bash
cd Client
npm install
```

### 3. Set Up the Backend (Server)

```bash
cd ../Server
pip install -r requirements.txt
```

> Install individual Python packages if no `requirements.txt` is present:
> ```bash
> pip install flask scikit-learn numpy pandas
> ```

## ▶️ Running the Application

### Start the Backend Server

```bash
cd Server
python server.py
```

The Flask API will be available at `http://localhost:5000`

### Start the Frontend

```bash
cd Client
npm run dev
```

The React app will open at `http://localhost:3000`

> **Note:** Make sure both the backend and frontend are running simultaneously for the app to work correctly.

## 🗂️ Project Structure

```
Cropy/
├── Client/               # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   └── App.js        # Main app entry
│   └── package.json
├── Server/               # Flask backend + ML model
│   ├── server.js         # Main backend file
│   └── model/            # Trained ML model files
├── Site Content/         # Static assets & content
├── setup.txt             # Quick setup guide
└── README.md
```

## 🛠️ Tech Stack

**Frontend**
- React.js
- HTML, CSS, JavaScript

**Backend**
- Python
- Flask

**Machine Learning**
- Scikit-learn
- NumPy
- Pandas

**Data Storage**
- JSON

**Version Control**
- Git & GitHub

## 📊 ML Model

The recommendation engine is trained on agricultural datasets containing:

| Input Feature | Description |
|---|---|
| Soil Type | Composition and texture of the soil |
| Weather Conditions | Temperature, humidity, rainfall patterns |
| Water Availability | Irrigation access and water retention |

The model processes these features and maps them to the most suitable crop from its trained dataset.

## 🎥 Demo

Watch Cropy in action:

👉 [View Demo Video](https://drive.google.com/file/d/19R2qQbSh8645B8hFhCL_8senob-prcJJ/view?usp=sharing)

## 🚀 Deployment

> ⚠️ **The application is yet to be deployed.** Stay tuned for further updates!

Planned deployment options:

- **Frontend** — Vercel / Netlify
- **Backend** — Render / Railway / AWS EC2

## 🌱 Future Improvements

- ✅ Deploy the application online
- ✅ Add fertilizer recommendations alongside crop suggestions
- ✅ Integrate real-time weather API (e.g. OpenWeatherMap)
- ✅ Add regional crop databases for Indian states
- ✅ Support for regional languages
- ✅ Mobile-responsive UI improvements

## 🤝 Contributing

Contributions are welcome! To get started:

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "Add your feature"
git push origin feature/your-feature-name
# Open a Pull Request
```

## 📬 Contact

**Javeed Zulfikar**
- 📧 [javeedrahman1404@gmail.com](mailto:javeedrahman1404@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/javeed-rahman)
- 🐙 [GitHub](https://github.com/Javeed004)
