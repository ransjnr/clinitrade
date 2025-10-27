# Clinitrade - Medical Instruments Marketplace

A comprehensive marketplace platform for buying, selling, and renting medical instruments and biomedical equipment. Built with React, Vite, and modern web technologies.

## Features

- **Browse Medical Instruments**: Search and filter through a wide range of biomedical devices
- **Categories**: Browse by type including Diagnostic Imaging, Patient Monitoring, Life Support, Laboratory Equipment, and more
- **User Listings**: Create and manage your medical instrument listings
- **Secure Messaging**: Chat with sellers and buyers
- **Advanced Search**: Filter by condition, manufacturer, and price range
- **Detailed Specifications**: View comprehensive details for each instrument

## Technology Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Clerk
- **Storage**: Firebase
- **Messaging**: Sendbird
- **Icons**: React Icons
- **Components**: Radix UI, shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Firebase account
- Clerk account for authentication
- Sendbird account for messaging

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd clinitrade
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with your credentials:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_DRIZZLE_DATABASE_URL=your_database_url
VITE_SENDBIRD_APP_ID=your_sendbird_app_id
VITE_SENDBIRD_API_TOKEN=your_sendbird_token
```

4. Start the development server
```bash
npm run dev
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio for database management

## Project Structure

```
src/
├── add-listing/     # Create/edit listing functionality
├── components/      # Reusable UI components
├── configs/         # Database and Firebase configuration
├── listing-details/ # Detailed view pages
├── profile/         # User profile and listings
├── search/          # Search and filter pages
└── Shared/          # Shared utilities and data
```

## License

All rights reserved © Clinitrade
