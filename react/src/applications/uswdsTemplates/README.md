# USWDS - Landing Page Template Structure

## Grid:
 The underlying Layout Grid system to ensure responsive alignment across the page.

## Banner
The required Official Government Banner to identify the site's authority.

## Extended Header:
Provides the top-level navigation and site branding.

## Hero:
A high-impact section at the top to convey your primary message and 
 call-to-action (CTA).

## Tagline Highlights:

## Graphics List:
 A set of sections often used to highlight key features or services with accompanying icons or images.

## Encourage to Act:

## Button:
Clear, prominent Call-to-Action buttons for your most important user tasks.

## Footer:

The USWDS Medium Footer is the standard choice when you need to provide balanced amount of information—specifically a few primary navigation links, social media icons, and essential agency contact details.

The medium footer is divided into two main sections within a standard < footer class="usa-footer" > tag:
- Primary Section: Contains a horizontal row of high - level navigation links.
- Secondary Section: Houses the agency logo, social media links, and contact  information like phone numbers and email addresses.

In the U.S.Web Design System(USWDS), there are three standard footer variants. If you are moving beyond the Medium Footer, the "next" options are either the  Big Footer or the Slim Footer, depending on whether you want to expand or reduce the content.
### 1. Big Footer 

The Big Footer is the most comprehensive option.
- **When to use:** Use this when you want to replicate your site's full navigation scheme at the bottom of the page.
- **Key Features:**
  - Supports multiple columns of links organized by topic.
  - Includes a section for newsletter signups or email subscriptions.
  - Contains social media icons and contact information.
### 2. Slim Footer 
The Slim Footer is the most minimalist option. 
- **When to use:** Use this when you only need to provide a few essential links and nothing else.
- **Key Features:**
  - A single row of primary links.
  - Designed for secondary pages or applications where a heavy footer would be  distracting.

### Summary of Differences

| Feature      | Big Footer      | Medium Footer      | Slim Footer           |
|--------------|-----------------|--------------------|-----------------------|
| Navigation   | multi-column    | Limited link list  | Minimal primary links |
| Newsletter   | Yes	         | No                 | No                    |
| Social Media | Yes             | Yes                | Optional              |

Best For	Main landing pages    Most standard pages  Simple apps or sub-pages

## Identifier:
 - While it visually sits at the bottom of the page (often immediately following the footer), it is technically a separate core component in USWDS.
 
## The Relationship Between the Footer and Identifier:
- **The Footer:** Variants like the Medium Footer handle site-specific information, such as your site’s navigation, social media icons, and contact details.
- **The Identifier:** This component is placed below the footer to communicate the  parent agency and provide legally required links (like Privacy Policy, Accessibility, and FOIA).

## Key Strategic Reminders
- **Simplicity is Key:** USWDS guidance suggests keeping landing pages simple. Avoid visually complex elements like Side Navigation or forms if they aren't essential to the primary goal.
- **Modular Flexibility:** You can add or remove components like Cards or media blocks based on what your research shows users actually need.
- **Accessibility:** Always test components (like Cards or Links) in your specific project context to ensure they remain Section 508 compliant.

# Converting HTML to JSX.

Search-replace: 
- `class=` with `className=`
- `fill-rule=` with `fillRule=`