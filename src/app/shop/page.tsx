"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import ProductCatalog from "@/components/ecommerce/productCatalog/ProductCatalog";
import { useProductCatalog } from "@/hooks/useProductCatalog";
import { useState } from "react";

export default function ShopPage() {
    const [cartOpen, setCartOpen] = useState(false);
    const {
        products,
        isLoading,
        search,
        setSearch,
        filters,
    } = useProductCatalog({ basePath: "/shop" });

    if (isLoading) {
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
                    <div id="navbar" data-section="navbar">
                        <NavbarStyleFullscreen
                            navItems={[
                                {"name":"Home","id":"/"},
                                {"name":"Shop","id":"/shop"}
                            ]}
                            brandName="Linear"
                            bottomLeftText="Global Sales Platform"
                            bottomRightText="sales@linear.io"
                            button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                        />
                    </div>
                    <main className="min-h-screen flex items-center justify-center pt-20">
                        <p className="text-foreground">Loading products...</p>
                    </main>
                    <div id="footer" data-section="footer">
                        <FooterBaseCard
                            logoText="Linear"
                            copyrightText="© 2025 Linear Sales. All rights reserved."
                            columns={[
                                {"title":"Product","items":[{"label":"Features","href":"#features-1"},{"label":"Pricing","href":"#pricing"},{"label":"Security","href":"#"},{"label":"Roadmap","href":"#"}]},
                                {"title":"Company","items":[{"label":"About","href":"#about"},{"label":"Blog","href":"#"},{"label":"Careers","href":"#"},{"label":"Press","href":"#"}]},
                                {"title":"Resources","items":[{"label":"Documentation","href":"#"},{"label":"API Reference","href":"#"},{"label":"Support","href":"#"},{"label":"Community","href":"#"}]},
                                {"title":"Legal","items":[{"label":"Privacy Policy","href":"#"},{"label":"Terms of Service","href":"#"},{"label":"Cookie Policy","href":"#"},{"label":"Contact","href":"#contact"}]}
                            ]}
                        />
                    </div>
                </ReactLenis>
            </ThemeProvider>
        );
    }

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
                <div id="navbar" data-section="navbar">
                    <NavbarStyleFullscreen
                        navItems={[
                            {"name":"Home","id":"/"},
                            {"name":"Shop","id":"/shop"}
                        ]}
                        brandName="Linear"
                        bottomLeftText="Global Sales Platform"
                        bottomRightText="sales@linear.io"
                        button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                    />
                </div>
                <div id="productCatalog" data-section="productCatalog">
                    <ProductCatalog
                        layout="page"
                        products={products}
                        searchValue={search}
                        onSearchChange={setSearch}
                        searchPlaceholder="Search products..."
                        filters={filters}
                        emptyMessage="No products found"
                    />
                </div>
                <div id="footer" data-section="footer">
                    <FooterBaseCard
                        logoText="Linear"
                        copyrightText="© 2025 Linear Sales. All rights reserved."
                        columns={[
                            {"title":"Product","items":[{"label":"Features","href":"#features-1"},{"label":"Pricing","href":"#pricing"},{"label":"Security","href":"#"},{"label":"Roadmap","href":"#"}]},
                            {"title":"Company","items":[{"label":"About","href":"#about"},{"label":"Blog","href":"#"},{"label":"Careers","href":"#"},{"label":"Press","href":"#"}]},
                            {"title":"Resources","items":[{"label":"Documentation","href":"#"},{"label":"API Reference","href":"#"},{"label":"Support","href":"#"},{"label":"Community","href":"#"}]},
                            {"title":"Legal","items":[{"label":"Privacy Policy","href":"#"},{"label":"Terms of Service","href":"#"},{"label":"Cookie Policy","href":"#"},{"label":"Contact","href":"#contact"}]}
                        ]}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}