# Waitlist Landing Page Template

A modern, responsive waitlist landing page template that helps you collect and manage email signups. Built with Next.js and Tailwind CSS, it seamlessly integrates with Zapier to automatically save submissions to Google Sheets - perfect for product launches, beta signups, or newsletter subscriptions.

### Why Use This Template?
- 📥 Collect emails and names without any backend setup
- 📊 Automatically save submissions to Google Sheets via Zapier
- ⚡ Zero configuration required - just update the webhook URL
- 🎨 Fully customizable content and styling

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- ✍️ Easily customizable content via JSON
- 🎯 Email collection with Zapier integration
- 🖼️ Full-screen background image support
- 🔤 Custom font integration (Playfair Display)
- 📝 Ready-to-use Google Sheets template
- 🔄 Real-time form submission handling

## Quick Start

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install && npm run dev
    ```

## Customizing Content

All text content is managed through `data/copy.json`. Update this file to customize:

```json
{
  "headerText": "Your Header",
  "heroText": "Your Hero Text",
  "bodyText": "Your Body Text",
  "ctaText": {
    "nameLabel": "Custom Name Label",
    "emailLabel": "Custom Email Label",
    "buttonText": "Custom Button Text"
  },
  "footerText": "Your Footer Text",
  "config": {
    "webhookUrl": "YOUR_WEBHOOK_URL",
    "metadata": {
      "title": "Your Site Title",
      "description": "Your Site Description",
      "favicon": "🚀"
    }
  }
}
```

### Configuration Options

- `headerText`: Main header text displayed at the top
- `heroText`: Large hero text - main value proposition
- `bodyText`: Descriptive text explaining your product/service
- `ctaText`:
  - `nameLabel`: Placeholder for name input field
  - `emailLabel`: Placeholder for email input field
  - `buttonText`: Text displayed on the submit button
- `footerText`: Copyright text shown at the bottom
- `config`:
  - `webhookUrl`: Zapier webhook URL for form submissions (see Webhook Configuration below)
  - `metadata`:
    - `title`: Browser tab title
    - `description`: Meta description for SEO
    - `favicon`: Emoji used as favicon

## Webhook Configuration

The template uses Zapier to collect form submissions. Here's how to set it up:

1. Create a new Zap in Zapier
2. Choose "Webhook by Zapier" as the trigger
3. Select "Catch Hook" as the event
4. Copy the provided webhook URL and paste it in `copy.json` under `config.webhookUrl`

### Webhook Payload

The webhook will receive the following JSON payload:

```json
{
  "name": "User's name",
  "email": "user@example.com"
}
```

### Google Sheets Integration

To save submissions to Google Sheets:

1. Set up the Zap action:
   - Choose "Google Sheets" as the action
   - Select "Create Spreadsheet Row" as the event

2. Configure the spreadsheet columns:
   ```
   | Column A | Column B |
   |----------|----------|
   | Name     | Email    |
   ```

3. Map the webhook data:
   - Name column: Select "name" from the webhook data
   - Email column: Select "email" from the webhook data

Your spreadsheet will automatically populate with new submissions like this:
```
| Name    | Email             |
|---------|-------------------|
| Howard  | howard@gmail.com  |
```

## Background Image

Place your background image in the `public` folder as `background.avif` or update the path in `app/page.tsx`.

## Styling

The template uses Tailwind CSS for styling. The main components are:
- Custom UI components from `@/components/ui`
- Playfair Display font for typography
- Responsive design breakpoints
- Semi-transparent form inputs
- Indigo-themed call-to-action button

## Project Structure

```
├── app/
│   └── page.tsx          # Main landing page component
├── components/
│   └── ui/              # UI components (button, input)
├── data/
│   └── copy.json        # Content configuration
└── public/
    └── background.avif  # Background image
```

## License

MIT License - feel free to use this template for your projects.

## Support

For issues or questions, please open an issue in the repository.
