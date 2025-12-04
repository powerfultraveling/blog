# Product Brief: Personal Blog Platform

## Project Overview

A personal blog platform designed to share thoughts, music, and life updates. The platform combines multiple content types (feeds, long-form posts, music, projects) with interactive features like comments and likes, creating an engaging space for personal expression and community interaction.

## Target Audience

- **Primary**: Personal audience interested in the author's thoughts, music taste, and projects
- **Secondary**: Developers and creatives looking for inspiration or similar content
- **Engagement**: Readers who want to interact through comments and likes

## Primary Benefits / Features

### 1. Feeds (Threads-like Platform)

- Short story posts in a feed format
- **Author-only posting**: Only the blog owner can create feed posts
- **Public engagement**:
  - Replies require Google account sign-in
  - Likes work without authentication
- **Content format**: Markdown storage for rich text formatting

### 2. Posts (Medium-like Platform)

- Long-form articles and thoughts
- **Rich content**: Support for links and images
- **Reader interaction**:
  - Comments require Google account sign-in
  - Like functionality available
- **Analytics**: View count tracking per post
- **Content format**: Markdown storage (format to be confirmed)

### 3. About Me

- Personal introduction page
- **Categorized sections**: Content organized into multiple categories
- **List-based display**: Each category shows items as a list
- Quick way for visitors to learn about the author

### 4. Music

- Share currently listening music or favorite tracks
- **Storytelling**: Accompany music with thoughts or stories
- Personal music discovery and sharing

### 5. Project Lists

- Showcase of completed projects
- **Post-like format**: Similar structure to blog posts
- **Project metadata**: GitHub and project links prominently displayed at the top
- Portfolio-style presentation

## High-Level Tech/Architecture

### Current Stack

- **Framework**: Nuxt.js 3.7.0
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Workers
- **Content**: Markdown files with front matter
- **Internationalization**: i18n support (English/Chinese)

### Planned Integrations

- **Authentication**: Google OAuth for user sign-in
- **Database**: Supabase (for feeds, comments, likes, view counts)
- **Form Management**: react-hook-form (Note: Currently Nuxt/Vue project, may need Vue alternative)
- **Validation**: Zod
- **State Management**: Zustand (Note: May need Vue alternative like Pinia)
- **Content Processing**: Markdown parsing (already using markdown-it, marked)

### Architecture Considerations

- **Content Storage**:
  - Posts: Markdown files (current) or database (to be decided)
  - Feeds: Database (Supabase)
  - About Me: Static data or database
  - Music: Database entries with markdown content
  - Projects: Database entries with markdown content
- **Authentication Flow**: Google OAuth → Supabase Auth
- **Data Models**:
  - Feeds: content (markdown), author_id, created_at, likes_count, replies
  - Posts: content (markdown), title, images, links, view_count, likes_count, comments
  - Music: title, artist, content (markdown), date
  - Projects: title, description, content (markdown), github_url, project_url, date
