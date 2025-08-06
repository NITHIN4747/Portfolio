# Portfolio Website

A modern, responsive, and recruiter-ready personal portfolio website built with React.js, TypeScript, Vite, Tailwind CSS, and Firebase.

## 🚀 Features

- **Modern Tech Stack**: React.js with TypeScript, Vite for fast builds
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive UI**: Smooth animations and transitions
- **Project Showcase**: Featured projects with detailed modals
- **Contact Form**: Firebase-powered contact form with validation
- **Performance Optimized**: Fast loading and SEO-friendly
- **Accessible**: WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # React components
│   ├── data/               # Portfolio data
│   ├── lib/                # Firebase configuration
│   ├── services/           # API services
│   ├── types/              # TypeScript types
│   └── main.tsx           # App entry point
├── public/                 # Static assets
├── dist/                  # Production build
└── .github/workflows/     # GitHub Actions
```

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure Firebase (Optional)**
   - Create a Firebase project
   - Update `src/lib/firebase.ts` with your config
   - Enable Firestore database

4. **Start development server**
   ```bash
   pnpm run dev
   ```

5. **Build for production**
   ```bash
   pnpm run build
   ```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. The GitHub Actions workflow will automatically deploy on push to main

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repo and deploy automatically
- **Vercel**: Import your GitHub repo for instant deployment
- **Firebase Hosting**: Use Firebase CLI to deploy

## 📝 Customization

### Personal Information
Update the portfolio data in `src/data/portfolio.ts`:
- Personal details and bio
- Skills and technologies
- Project information
- Work experience
- Achievements
- Contact information

### Styling
- Colors and themes: Modify Tailwind classes
- Typography: Update font families in `index.html`
- Layout: Adjust component structures

### Firebase Integration
- Update Firebase config in `src/lib/firebase.ts`
- Customize contact form in `src/components/Contact.tsx`

## 🎨 Design Features

- **Hero Section**: Eye-catching introduction with call-to-action
- **About Me**: Personal story and key highlights
- **Skills Grid**: Visual representation of technical skills
- **Projects**: Featured projects with technology tags and modals
- **Experience Timeline**: Professional experience in chronological order
- **Achievements**: Awards and recognitions with visual appeal
- **Contact Form**: Functional contact form with Firebase backend
- **Responsive Footer**: Social links and quick navigation

## 🔧 Technologies Used

- **Frontend**: React.js, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide Icons
- **Backend**: Firebase (Firestore)
- **Deployment**: GitHub Pages, GitHub Actions
- **Development**: ESLint, PostCSS

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact through the portfolio contact form or create an issue in the repository.

---

**Built with ❤️ for showcasing software engineering talent**

