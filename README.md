# Teamcenter PLM Demo

<video width="100%" controls>
  <source src="assets/TC-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

A demonstration of a lightweight PLM (Product Lifecycle Management) system inspired by Teamcenter, showcasing part lifecycle management and 3D model visualization capabilities.

![Demo Screenshot](assets/Demo.PNG)

## Overview

This project demonstrates a simplified version of enterprise PLM functionality, specifically focusing on part lifecycle management and 3D visualization. The implementation is based on real-world experience with Siemens Teamcenter, showcasing key PLM concepts in a modern web application.

## Features

- **Part Lifecycle Management**: Track and manage the status of parts through their lifecycle stages (Draft → Review → Released)
- **3D Model Visualization**: Interactive 3D viewer for CAD models using Three.js
- **Risk Level Assessment**: Built-in risk evaluation system for parts
- **Real-time Updates**: Instant status updates and notifications
- **Responsive Design**: Modern UI that works across devices
- **ITK Simulation**: C++ implementation simulating Teamcenter's ITK (Integration Toolkit) behaviors

## Data Source: Teamcenter X Essentials Trial VM

The part data and workflow concepts in this demo were extracted from hands-on experience with Teamcenter X Essentials Trial VM. Below are screenshots showing the source environment:

### Teamcenter Dashboard Access
![TeamCenter Dashboard](assets/Dashboard.PNG)
The Teamcenter X dashboard provides access to part metadata, lifecycle states, and relationships that we've modeled in this demo. This enterprise environment helped us understand the proper structure for part management workflows.

### NX CAD Data Export
![NX Integration](assets/NX.PNG)
Using Teamcenter X's NX integration, we exported sample CAD data and studied the relationships between parts, assemblies, and their lifecycle states. This informed our 3D visualization implementation.

### Teamcenter Authentication
![TeamCenter Login](assets/Login.PNG)
Access to Teamcenter X Trial VM is secured through enterprise-grade authentication, ensuring data integrity. While our demo is simplified, it maintains similar principles of controlled access to part data.

## Technical Stack

- **Frontend**: HTML5, JavaScript, Three.js for 3D visualization
- **Backend**: Node.js, Express
- **Data Storage**: JSON-based data store (structured based on Teamcenter data models)
- **3D Support**: glTF format for 3D models
- **ITK Simulation**: C++ implementation mimicking Teamcenter's server-side logic

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/teamcenter-plm-demo.git
   ```

2. Install dependencies:
   ```bash
   cd teamcenter-plm-demo
   cd backend && npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

4. Open `frontend/index.html` in your browser

5. (Optional) Run the ITK simulation:
   ```bash
   cd cpp-itk-sim
   g++ simulate_itk.cpp -o simulate_itk
   ./simulate_itk
   ```

## Development

The project is structured to demonstrate PLM concepts while maintaining simplicity:

- `frontend/`: Contains the web interface and 3D viewer
- `backend/`: Houses the Node.js server and API endpoints
- `assets/`: Stores demo files and documentation assets
- `cpp-itk-sim/`: Simulates Teamcenter ITK functionality
  - Demonstrates part status transitions
  - Implements basic validation rules
  - Simulates server-side business logic

## Project Structure
```
teamcenter-plm-demo/
├── frontend/          # Web interface and 3D viewer
├── backend/           # Node.js server and API
├── cpp-itk-sim/       # Teamcenter ITK simulation
│   └── simulate_itk.cpp   # Core ITK simulation logic
├── assets/           
│   ├── Dashboard.PNG  # Teamcenter X Trial screenshots
│   ├── NX.PNG        # CAD integration reference
│   ├── Login.PNG     # Access control example
│   └── Demo.PNG      # Demo application
└── README.md
```

## ITK Simulation Details

The `cpp-itk-sim` component simulates key aspects of Teamcenter's Integration Toolkit (ITK):

### Features
- Part lifecycle state management
- Business rule validation
- Risk level assessment logic
- Status transition workflows

### Example Usage
```cpp
Part torqueArm("000310", "Torque Arm Extended", "Medium");
torqueArm.printStatus();  // Shows initial Draft status
torqueArm.review();      // Transitions to In Review
torqueArm.approve();     // Validates and transitions to Released
```

This simulation helps demonstrate how Teamcenter's server-side logic handles part lifecycle management and validation rules.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Data and concepts sourced from Siemens Teamcenter X Essentials Trial VM
- 3D viewer powered by Three.js
- Sample 3D models from Khronos glTF samples
- ITK simulation inspired by Teamcenter Integration Toolkit
