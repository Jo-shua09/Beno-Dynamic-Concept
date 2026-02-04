# Beno Dynamic Concept Website

A modern, responsive React application for Beno Dynamic Concept Nig., showcasing Nigeria's premier executive transportation and professionally trained security drivers. Built with cutting-edge web technologies for optimal performance and user experience.

## 🌟 Features

### Core Functionality

- **Multi-Page Website**: Home, About, Services, and Contact pages with seamless navigation
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Interactive Contact Form**: Multi-step booking form with WhatsApp integration for instant inquiries
- **Modern UI/UX**: Glassmorphism effects, smooth animations, and professional design

### Technical Features

- **Type-Safe Development**: Full TypeScript implementation for robust code
- **Fast Performance**: Vite-powered build system with optimized production builds
- **Component Library**: shadcn/ui components for consistent, accessible UI
- **Routing**: Client-side routing with React Router for SPA experience
- **Form Handling**: Advanced form management with validation and error handling
- **Toast Notifications**: User feedback with customizable toast messages

### Business Features

- **Service Showcase**: Detailed presentation of executive driver services
- **Company Story**: Timeline and milestones of Beno Dynamic Concept
- **Driver Training Info**: Comprehensive information about "Spy Driver" training program
- **Contact Integration**: Direct WhatsApp messaging for booking inquiries
- **SEO Optimized**: Meta tags and structured content for search engines

## 🛠️ Technologies Used

### Frontend Framework

- **React 18.3.1** - Modern UI library with hooks and concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript for better development experience
- **Vite 5.4.19** - Fast build tool and development server

### UI & Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components built on Radix UI
- **Lucide React** - Beautiful & consistent icon library
- **Tailwind Animate** - Animation utilities for Tailwind CSS

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic CSS vendor prefixing

### Additional Libraries

- **React Router DOM 6.30.1** - Declarative routing for React
- **React Hook Form 7.61.1** - Performant forms with easy validation
- **@tanstack/react-query 5.83.0** - Powerful data synchronization for React
- **Zod 3.25.76** - TypeScript-first schema validation
- **date-fns 3.6.0** - Modern JavaScript date utility library

## 📁 Project Structure

```
beno-dynamic-concept/
├── public/                          # Static assets
│   ├── logo.webp                   # Company logo
│   ├── robots.txt                  # SEO robots file
│   └── sitemap.xml                 # Website sitemap
├── src/
│   ├── assets/                     # Application assets
│   │   ├── images/                 # Image files
│   │   ├── driver-portrait.jpg     # Driver portrait
│   │   ├── fleet.jpg              # Fleet image
│   │   └── hero-car.jpg           # Hero section car image
│   ├── components/                 # Reusable components
│   │   ├── ui/                     # shadcn/ui components
│   │   │   ├── button.tsx          # Button component
│   │   │   ├── card.tsx            # Card component
│   │   │   ├── input.tsx           # Input component
│   │   │   └── ...                 # Other UI components
│   │   ├── layout/                 # Layout components
│   │   │   ├── Navbar.tsx          # Navigation bar
│   │   │   ├── Footer.tsx          # Footer component
│   │   │   └── Layout.tsx          # Main layout wrapper
│   │   └── NavLink.tsx             # Navigation link component
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   └── use-toast.ts            # Toast notification hook
│   ├── lib/                        # Utility functions
│   │   └── utils.ts                # General utilities
│   ├── pages/                      # Page components
│   │   ├── Index.tsx               # Home page
│   │   ├── About.tsx               # About page
│   │   ├── Services.tsx            # Services page
│   │   ├── Contact.tsx             # Contact page
│   │   └── NotFound.tsx            # 404 page
│   ├── App.tsx                     # Main application component
│   ├── App.css                     # Application styles
│   ├── index.css                   # Global styles
│   └── main.tsx                    # Application entry point
├── .gitignore                      # Git ignore rules
├── components.json                 # shadcn/ui configuration
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML template
├── package.json                    # Project dependencies
├── postcss.config.js               # PostCSS configuration
├── README.md                       # Project documentation
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig*.json                  # TypeScript configurations
├── vite.config.ts                  # Vite configuration
└── TODO.md                         # Development tasks
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** (optional)
- **Git** - For version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/beno-dynamic-concept.git
   cd beno-dynamic-concept
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   The application will be available at `http://localhost:8080`.

## 📜 Available Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the development server with hot reload |
| `npm run build`     | Build the application for production         |
| `npm run build:dev` | Build the application for development        |
| `npm run lint`      | Run ESLint to check code quality             |
| `npm run preview`   | Preview the production build locally         |

### Script Explanations

- **`dev`**: Launches Vite's development server with hot module replacement for instant updates during development
- **`build`**: Creates an optimized production build in the `dist` directory, ready for deployment
- **`build:dev`**: Creates a development build with source maps for debugging
- **`lint`**: Runs ESLint to enforce code quality and consistency across the codebase
- **`preview`**: Serves the production build locally to test before deployment

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Deploy**: Vercel will automatically deploy on every push to main branch

### Other Platforms

The application can also be deployed to:

- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3 + CloudFront**: For scalable static hosting

### Environment Variables

No environment variables are required for basic functionality. However, you can add:

- `VITE_APP_TITLE`: Custom application title
- `VITE_WHATSAPP_NUMBER`: WhatsApp contact number (already configured)

## 🤝 Contributing

We welcome contributions to improve the Beno Dynamic Concept website!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Guidelines

- Follow the existing code style and TypeScript conventions
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation if needed
- Ensure responsive design works across all devices

## 📞 Contact

**Beno Dynamic Concept Nig.**

- **Website**: [benoconcept.vercel.app](https://benoconcept.vercel.app)
- **Email**: onyekaaigbaze@gmail.com | bookings@benoconcept.com
- **Phone**: +234 813 390 2855 | +234 801 234 5678
- **Location**: Lagos State & Ogun State, Nigeria
- **WhatsApp**: [+234 813 390 2855](https://wa.me/2348133902855)

For business inquiries or driver hiring, please use the contact form on our website or reach out directly via WhatsApp for immediate assistance.

## 📄 License

This project is proprietary software owned by Beno Dynamic Concept Nig. All rights reserved.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the icon library
- **Vercel** for hosting and deployment platform

---

Built with ❤️ for Nigeria's executive transportation excellence.
