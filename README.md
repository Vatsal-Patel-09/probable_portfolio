# Portfolio Website v2

Welcome to my portfolio website! This repository contains the code for my personal portfolio built with Next.js, deployed on AWS EC2 using GitHub Actions, Docker, and Nginx.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Next.js**: A React framework for building fast and scalable web applications.
- **Tailwind CSS & Daisy UI**: A utility-first CSS framework and a component library for rapid UI development.
- **Responsive Design**: Optimized for different screen sizes.
- **AWS EC2**: Deployed using Amazon Web Services EC2.
- **GitHub Actions**: Continuous integration and deployment.
- **Docker**: Containerized application for consistency across environments.
- **Nginx**: Used as a reverse proxy server.

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js
- Docker
- AWS account

### Clone the repository

```bash
git clone https://github.com/Ayan0420/webportfolio-nextjs
cd webportfolio-nextjs
```

### Install dependencies

```bash
npm install
```

### Build the Docker image

```bash
docker build -t your-image-name .
```

### Run the Docker container

```bash
docker run -p 3000:3000 your-image-name
```

The application should now be running on `http://localhost:3000`.

## Usage

Navigate through different sections like About, Work Experience, Projects, and Blog. The navbar highlights the current section as you scroll.

## Deployment

The application is deployed on an AWS EC2 instance using GitHub Actions. Here’s an overview of the deployment process:

1. **AWS EC2**: Set up an EC2 instance with the necessary configurations.
2. **GitHub Actions**: Use the GitHub Actions workflow for continuous integration and deployment.
3. **Docker**: Build and push Docker images to Docker Hub.
4. **Nginx**: Configure Nginx as a reverse proxy server to manage traffic.

### GitHub Actions Workflow

Here’s the GitHub Actions workflow used for this project:

[Github Action YAML File](https://github.com/Ayan0420/webportfolio-nextjs/blob/main/.github/workflows/cicd.yml)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, feature requests, or enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Feel free to reach out to me via email or through my [LinkedIn](https://www.linkedin.com/in/jerry-clark-ian-cabuntucan/).
