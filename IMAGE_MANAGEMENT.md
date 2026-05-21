# Image Management Guide for Khohang Website

## Current Setup

All images are centrally managed through `client/src/lib/imageConfig.ts`. This file contains all image references used throughout the website.

## Current Images

The website currently uses the following images:

| Image Name | Location | Usage |
|-----------|----------|-------|
| `hero` | Hero section background | Main banner at top of page |
| `aboutCourtyard` | About section | Khohang courtyard entrance photo |
| `diningSpace1` | Menu section | Thakali Thali platter image |
| `diningSpace2` | Performances section | Cultural dance performance image |

## How to Add Local Images

Follow these steps to replace the current images with your own local images:

### Step 1: Prepare Your Images
Place your image files in the `client/src/assets/images/` folder with these names:
- `hero-restaurant.jpg` - Hero section background (recommended: 1920x1080px or larger)
- `about-courtyard.jpg` - About section image (recommended: 800x600px or larger)
- `dining-space-1.jpg` - Menu section image (recommended: 800x600px or larger)
- `dining-space-2.jpg` - Performances section image (recommended: 800x600px or larger)

### Step 2: Update imageConfig.ts
Edit `client/src/lib/imageConfig.ts` and replace the URLs with imports:

```typescript
import heroImg from "../assets/images/hero-restaurant.jpg";
import aboutImg from "../assets/images/about-courtyard.jpg";
import diningSpace1Img from "../assets/images/dining-space-1.jpg";
import diningSpace2Img from "../assets/images/dining-space-2.jpg";

export const IMAGES = {
  hero: heroImg,
  aboutCourtyard: aboutImg,
  diningSpace1: diningSpace1Img,
  diningSpace2: diningSpace2Img,
} as const;
```

### Step 3: Verify
The website will automatically update with your local images. No other code changes are needed!

## Benefits of This Approach

- **Centralized Management**: All images in one place for easy updates
- **Easy Swapping**: Change images without touching component code
- **Type Safety**: TypeScript ensures all image references are valid
- **Performance**: Local images reduce external dependencies
- **Maintenance**: Clear naming convention makes it easy to understand which image is used where

## Current Image URLs

If you need to reference the current images, they are stored at:
- Hero: `/manus-storage/OA01s0q8V1Bb_13c3f4b2.jpg`
- About: `/manus-storage/d8Kb7s62koiy_e8537051.jpg`
- Dining 1: `/manus-storage/eoSCNYdvfwGX_0c37948b.jpg`
- Dining 2: `/manus-storage/7X3NOHljfHNy_9726ff5a.jpg`

## Image Specifications

For best results, use these image specifications:

| Image | Dimensions | Format | Max Size |
|-------|-----------|--------|----------|
| Hero Background | 1920x1080 or larger | JPG | 500KB |
| About Courtyard | 800x600 or larger | JPG | 300KB |
| Dining Space 1 | 800x600 or larger | JPG | 300KB |
| Dining Space 2 | 800x600 or larger | JPG | 300KB |

## Need Help?

If you have any questions about the image management system or need to add more images, feel free to ask!
