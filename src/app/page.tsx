"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { LayoutDashboard, TrendingUp, Users, Settings, BarChart3, CheckCircle, Clock, AlertCircle, Zap, Lightbulb, Brain, MessageSquare, Share2, Mail, Phone, FileText, Sparkles, Lock, GitBranch, Globe, Award, Star, DollarSign, HelpCircle, Rocket } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Linear"
          bottomLeftText="Global Sales Platform"
          bottomRightText="sales@linear.io"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Real-Time Sales Dashboard for Growing Teams"
          description="Transform your sales pipeline with Linear's advanced analytics, real-time metrics, and intelligent forecasting. Monitor revenue, conversion rates, and team performance from a single unified dashboard."
          tag="Sales Intelligence"
          tagIcon={TrendingUp}
          buttons={[
            { text: "Start Free Trial", href: "https://linear.io/signup" },
            { text: "View Demo", href: "#" }
          ]}
          background={{ variant: "radial-gradient" }}
          dashboard={{
            title: "Sales Metrics Hub",            logoIcon: BarChart3,
            imageSrc: "https://img.b2bpic.net/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg",            imageAlt: "Linear Sales Dashboard",            searchPlaceholder: "Search deals, contacts, pipeline...",            buttons: [
              { text: "Export Report", href: "#" },
              { text: "Share Dashboard", href: "#" }
            ],
            sidebarItems: [
              { icon: LayoutDashboard, active: true },
              { icon: TrendingUp },
              { icon: Users },
              { icon: Settings }
            ],
            stats: [
              {
                title: "Total Pipeline",                values: [850000, 1250000, 1680000],
                valuePrefix: "$",                description: "Potential revenue opportunities"
              },
              {
                title: "Conversion Rate",                values: [18.5, 22.3, 26.8],
                valueSuffix: "%",                description: "Deal closure percentage"
              },
              {
                title: "Active Deals",                values: [42, 58, 71],
                description: "Ongoing sales opportunities"
              }
            ],
            chartTitle: "Monthly Revenue Trend",            chartData: [
              { value: 45 },
              { value: 62 },
              { value: 58 },
              { value: 73 },
              { value: 89 }
            ],
            listTitle: "Recent Deals",            listItems: [
              { icon: CheckCircle, title: "Enterprise License - $125K", status: "Closed Won" },
              { icon: Clock, title: "SMB Package - $45K", status: "Negotiation" },
              { icon: AlertCircle, title: "Startup Plan - $12K", status: "Proposal" }
            ]
          }}
        />
      </div>

      <div id="features-1" data-section="features-1">
        <FeatureBento
          features={[
            {
              title: "Real-Time Analytics",              description: "Track pipeline health, conversion rates, and revenue forecasts in real-time",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "AI-Powered Insights",              description: "Get intelligent recommendations to accelerate deal closure and identify risks",              bentoComponent: "icon-info-cards",              items: [
                { icon: Lightbulb, label: "Smart Scoring", value: "ML-Driven" },
                { icon: Brain, label: "Predictive", value: "AI-Enhanced" },
                { icon: Zap, label: "Automated", value: "Real-Time" }
              ]
            },
            {
              title: "Team Collaboration",              description: "Keep your entire sales team aligned with shared dashboards and communications",              bentoComponent: "orbiting-icons",              centerIcon: Users,
              items: [
                { icon: MessageSquare, ring: 1 },
                { icon: Share2, ring: 1 },
                { icon: CheckCircle, ring: 2 },
                { icon: AlertCircle, ring: 2 }
              ]
            },
            {
              title: "Pipeline Stages",              description: "Visualize your entire sales pipeline with customizable stages and forecasting",              bentoComponent: "3d-task-list",              items: [
                { icon: Mail, label: "Lead Outreach", time: "Day 1" },
                { icon: Phone, label: "Discovery Call", time: "Day 3-5" },
                { icon: FileText, label: "Proposal", time: "Day 7-10" }
              ]
            }
          ]}
          title="Powerful Sales Tools Built for Performance"
          description="Everything you need to accelerate your sales cycle and close more deals faster"
          tag="Core Features"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features-2" data-section="features-2">
        <FeatureHoverPattern
          features={[
            {
              icon: BarChart3,
              title: "Custom Reporting",              description: "Create unlimited custom reports and automate insights delivery to stakeholders"
            },
            {
              icon: Lock,
              title: "Enterprise Security",              description: "SOC2 compliant with role-based access control and audit logging"
            },
            {
              icon: GitBranch,
              title: "API Integration",              description: "Connect your entire tech stack with powerful REST and webhook APIs"
            },
            {
              icon: Zap,
              title: "Automation Rules",              description: "Automate repetitive tasks and create workflows that save your team hours"
            },
            {
              icon: Globe,
              title: "Multi-Currency",              description: "Support for 150+ currencies with real-time exchange rate conversion"
            },
            {
              icon: Users,
              title: "Team Management",              description: "Manage permissions, territories, and quotas across unlimited team members"
            }
          ]}
          title="Advanced Sales Capabilities"
          description="Unlock deeper insights and control with enterprise-grade features"
          tag="Advanced Tools"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Impact"
          tagIcon={Award}
          title="Trusted by Sales Leaders Worldwide"
          description="Linear powers sales teams at leading companies who want to close deals faster and grow revenue. Our platform has helped thousands of sales professionals streamline their processes, improve forecasting accuracy, and accelerate their pipeline velocity."
          metrics={[
            { value: "500K+", title: "Active Sales Professionals" },
            { value: "$2B+", title: "Pipeline Managed Annually" }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/team-diverse-coworkers-modern-office-discuss-their-project-together_93675-133516.jpg"
          imageAlt="Sales Team Collaboration"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              handle: "VP Sales, TechCorp",              testimonial: "Linear transformed how our sales team operates. We went from manual spreadsheets to automated dashboards that save us 10 hours per week.",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              imageAlt: "Sarah Chen"
            },
            {
              id: "2",              name: "Michael Rodriguez",              handle: "Sales Manager, GrowthCo",              testimonial: "The forecasting accuracy has improved dramatically. We can now predict quarterly results with 95% accuracy instead of guessing.",              imageSrc: "https://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg",              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",              name: "Emily Watson",              handle: "CEO, StartupXYZ",              testimonial: "Linear's AI insights helped us identify deal risks early. We prevented three major deal losses by acting on recommendations.",              imageSrc: "https://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg",              imageAlt: "Emily Watson"
            },
            {
              id: "4",              name: "David Kim",              handle: "Head of Sales, EnterpriseSoft",              testimonial: "The team collaboration features are incredible. Everyone is always aligned on pipeline status and next steps.",              imageSrc: "https://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg",              imageAlt: "David Kim"
            },
            {
              id: "5",              name: "Jessica Martinez",              handle: "Sales Director, CloudFirst",              testimonial: "ROI was immediate. We recovered $500K in at-risk deals in our first month using Linear's insights.",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",              imageAlt: "Jessica Martinez"
            },
            {
              id: "6",              name: "James Sullivan",              handle: "VP Revenue, FinTech Labs",              testimonial: "The best investment we've made in our sales stack. Linear pays for itself within weeks through improved productivity.",              imageSrc: "https://img.b2bpic.net/free-photo/serene-businessman-with-glasses_1098-719.jpg",              imageAlt: "James Sullivan"
            }
          ]}
          title="What Sales Leaders Say About Linear"
          description="Hear from the teams transforming their sales processes with Linear"
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="invertDefault"
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          plans={[
            {
              id: "1",              price: "$99/mo",              name: "Starter",              buttons: [
                { text: "Get Started", href: "https://linear.io/signup" },
                { text: "Contact Sales", href: "#contact" }
              ],
              features: [
                "Up to 5 team members",                "Basic analytics dashboard",                "Pipeline management",                "Email support",                "Monthly forecasts"
              ]
            },
            {
              id: "2",              badge: "Most Popular",              badgeIcon: Sparkles,
              price: "$299/mo",              name: "Professional",              buttons: [
                { text: "Get Started", href: "https://linear.io/signup" },
                { text: "Contact Sales", href: "#contact" }
              ],
              features: [
                "Up to 20 team members",                "Advanced analytics & AI insights",                "Custom reporting",                "Priority support",                "Weekly forecasts",                "API access"
              ]
            },
            {
              id: "3",              price: "$899/mo",              name: "Enterprise",              buttons: [
                { text: "Get Started", href: "https://linear.io/signup" },
                { text: "Contact Sales", href: "#contact" }
              ],
              features: [
                "Unlimited team members",                "Enterprise-grade analytics",                "White-label capabilities",                "24/7 dedicated support",                "Real-time forecasts",                "Advanced integrations",                "SSO & advanced security"
              ]
            }
          ]}
          title="Transparent Pricing for Every Team Size"
          description="Choose the plan that fits your sales organization. Upgrade or downgrade anytime."
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          carouselMode="buttons"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {
              id: "1",              title: "How quickly can we implement Linear?",              content: "Most teams are up and running within 1-2 weeks. Our onboarding team provides dedicated support including data migration, integration setup, and team training. Enterprise clients typically complete implementation within 4 weeks."
            },
            {
              id: "2",              title: "Does Linear integrate with our existing CRM?",              content: "Yes! Linear integrates with Salesforce, HubSpot, Pipedrive, and 50+ other tools. We offer REST APIs and webhooks for custom integrations. Contact our team to discuss your specific tech stack."
            },
            {
              id: "3",              title: "What about data security and compliance?",              content: "Linear is SOC2 Type II certified and GDPR compliant. We offer enterprise features including SSO, role-based access control, audit logging, and encrypted data transmission. Your data is never shared with third parties."
            },
            {
              id: "4",              title: "Can we customize the dashboard for our team?",              content: "Absolutely. Every dashboard is fully customizable. Build custom reports, set up automated alerts, create team-specific views, and configure permissions. No coding required."
            },
            {
              id: "5",              title: "How is customer support handled?",              content: "Starter plans get email support during business hours. Professional plans receive priority support with 4-hour response times. Enterprise customers get dedicated account managers and 24/7 support."
            },
            {
              id: "6",              title: "What happens to our data if we cancel?",              content: "We provide a 30-day data export window after cancellation in standard formats (CSV, JSON). You maintain full access to your data and can migrate to any other platform at any time."
            }
          ]}
          title="Frequently Asked Questions"
          description="Find answers to common questions about Linear's features, pricing, and implementation"
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Scale Your Sales?"
          tagIcon={Rocket}
          title="Start Your Free Trial Today"
          description="Join hundreds of sales teams already using Linear to accelerate their pipeline and close more deals. Get instant access to all features. No credit card required."
          buttons={[
            { text: "Start Free Trial", href: "https://linear.io/signup" },
            { text: "Schedule Demo", href: "#" }
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Linear"
          copyrightText="© 2025 Linear Sales. All rights reserved."
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features-1" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "#" },
                { label: "Roadmap", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Support", href: "#" },
                { label: "Community", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}