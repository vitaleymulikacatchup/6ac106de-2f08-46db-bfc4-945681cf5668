"use client";

import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import { useBlogPosts } from "@/hooks/useBlogPosts";

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

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
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarStyleFullscreen
                        navItems={[
                            { name: "Home", id: "/" },
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

                    {isLoading ? (
                        <div className="w-content-width mx-auto py-20 text-center">
                            <p className="text-foreground">Loading posts...</p>
                        </div>
                    ) : (
                        <div id="blog" data-section="blog">
                            <BlogCardTwo
                                blogs={posts}
                                title="Latest Insights & Updates"
                                description="Discover expert insights, industry trends, and product updates from our team of specialists"
                                tag="Blog"
                                textboxLayout="default"
                                useInvertedBackground="noInvert"
                                carouselMode="buttons"
                                animationType="slide-up"
                            />
                        </div>
                    )}

                    <div id="footer" data-section="footer">
                        <FooterBaseCard
                            logoText="Linear"
                            copyrightText="© 2025 Linear Sales. All rights reserved."
                            columns={[
                                {
                                    title: "Product",                                    items: [
                                        { label: "Features", href: "#features-1" },
                                        { label: "Pricing", href: "#pricing" },
                                        { label: "Security", href: "#" },
                                        { label: "Roadmap", href: "#" }
                                    ]
                                },
                                {
                                    title: "Company",                                    items: [
                                        { label: "About", href: "#about" },
                                        { label: "Blog", href: "#" },
                                        { label: "Careers", href: "#" },
                                        { label: "Press", href: "#" }
                                    ]
                                },
                                {
                                    title: "Resources",                                    items: [
                                        { label: "Documentation", href: "#" },
                                        { label: "API Reference", href: "#" },
                                        { label: "Support", href: "#" },
                                        { label: "Community", href: "#" }
                                    ]
                                },
                                {
                                    title: "Legal",                                    items: [
                                        { label: "Privacy Policy", href: "#" },
                                        { label: "Terms of Service", href: "#" },
                                        { label: "Cookie Policy", href: "#" },
                                        { label: "Contact", href: "#contact" }
                                    ]
                                }
                            ]}
                        />
                    </div>
            </ReactLenis>
        </ThemeProvider>
    );
}