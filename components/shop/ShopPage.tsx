"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { SlidersHorizontal, X } from "lucide-react"
import ProductGrid from "@/components/shop/ProductGrid"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Sample mock data
const products = Array.from({ length: 40 }).map((_, i) => ({
  id: i + 1,
  name: [
    "Vintage Denim Jacket",
    "Floral Summer Dress",
    "Leather Crossbody Bag",
    "High-Waist Jeans",
    "Oversized Knit Sweater",
    "Silk Blouse",
    "Linen Pants",
    "Cotton T-shirt",
    "Wool Coat",
    "Pleated Skirt",
  ][i % 10],
  price: Math.floor(Math.random() * 2000) + 500,
  originalPrice: Math.floor(Math.random() * 3000) + 1000,
  condition: ["New with tags", "Like new", "Good", "Fair"][Math.floor(Math.random() * 4)],
  category: ["Tops", "Bottoms", "Dresses", "Outerwear", "Accessories"][Math.floor(Math.random() * 5)],
  brand: ["Zara", "H&M", "Mango", "Forever 21", "Uniqlo", "Nike", "Adidas", "Levi's"][Math.floor(Math.random() * 8)],
  color: ["Black", "White", "Blue", "Red", "Green", "Yellow", "Pink", "Brown"][Math.floor(Math.random() * 8)],
  size: ["XS", "S", "M", "L", "XL"][Math.floor(Math.random() * 5)],
  rating: (Math.random() * 2 + 3).toFixed(1),
  reviews: Math.floor(Math.random() * 50) + 1,
  seller: {
    name: ["Style Savvy", "Urban Thrift", "Vintage Vibes", "Fashion Forward", "Closet Cleanout"][
      Math.floor(Math.random() * 5)
    ],
    isVerified: Math.random() > 0.3,
  },
  image: `/placeholder.svg?height=${400}&width=${300}`,
}))

const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "low" },
  { label: "Price: High to Low", value: "high" },
  { label: "Most Popular", value: "popular" },
  { label: "Best Rating", value: "rating" },
]

const categories = ["Tops", "Bottoms", "Dresses", "Outerwear", "Accessories"]
const conditions = ["New with tags", "Like new", "Good", "Fair"]
const sizes = ["XS", "S", "M", "L", "XL"]
const colors = ["Black", "White", "Blue", "Red", "Green", "Yellow", "Pink", "Brown"]
const brands = ["Zara", "H&M", "Mango", "Forever 21", "Uniqlo", "Nike", "Adidas", "Levi's"]

export default function ShopPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const router = useRouter()
  const params = useSearchParams()

  const initialCategory = params.get("category") || ""

  const [activeFilters, setActiveFilters] = useState({
    category: initialCategory ? [initialCategory] : [],
    condition: [] as string[],
    size: [] as string[],
    color: [] as string[],
    brand: [] as string[],
    priceRange: [500, 2500] as [number, number],
  })

  const [sortBy, setSortBy] = useState("newest")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Apply filters
  useEffect(() => {
    let result = [...products]

    // Filter by category
    if (activeFilters.category.length > 0) {
      result = result.filter((product) => activeFilters.category.includes(product.category))
    }

    // Filter by condition
    if (activeFilters.condition.length > 0) {
      result = result.filter((product) => activeFilters.condition.includes(product.condition))
    }

    // Filter by size
    if (activeFilters.size.length > 0) {
      result = result.filter((product) => activeFilters.size.includes(product.size))
    }

    // Filter by color
    if (activeFilters.color.length > 0) {
      result = result.filter((product) => activeFilters.color.includes(product.color))
    }

    // Filter by brand
    if (activeFilters.brand.length > 0) {
      result = result.filter((product) => activeFilters.brand.includes(product.brand))
    }

    // Filter by price range
    result = result.filter(
      (product) => product.price >= activeFilters.priceRange[0] && product.price <= activeFilters.priceRange[1],
    )

    // Sort products
    switch (sortBy) {
      case "newest":
        // No sort needed, assumes products are already sorted by newest
        break
      case "low":
        result.sort((a, b) => a.price - b.price)
        break
      case "high":
        result.sort((a, b) => b.price - a.price)
        break
      case "popular":
        result.sort((a, b) => Number.parseInt(b.reviews) - Number.parseInt(a.reviews))
        break
      case "rating":
        result.sort((a, b) => Number.parseFloat(b.rating) - Number.parseFloat(a.rating))
        break
      default:
        break
    }

    setFilteredProducts(result)
  }, [activeFilters, sortBy])

  const handleCategoryChange = (category: string) => {
    setActiveFilters((prev) => {
      const updatedCategories = prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category]

      return {
        ...prev,
        category: updatedCategories,
      }
    })
  }

  const handleConditionChange = (condition: string) => {
    setActiveFilters((prev) => {
      const updatedConditions = prev.condition.includes(condition)
        ? prev.condition.filter((c) => c !== condition)
        : [...prev.condition, condition]

      return {
        ...prev,
        condition: updatedConditions,
      }
    })
  }

  const handleSizeChange = (size: string) => {
    setActiveFilters((prev) => {
      const updatedSizes = prev.size.includes(size) ? prev.size.filter((s) => s !== size) : [...prev.size, size]

      return {
        ...prev,
        size: updatedSizes,
      }
    })
  }

  const handleColorChange = (color: string) => {
    setActiveFilters((prev) => {
      const updatedColors = prev.color.includes(color) ? prev.color.filter((c) => c !== color) : [...prev.color, color]

      return {
        ...prev,
        color: updatedColors,
      }
    })
  }

  const handleBrandChange = (brand: string) => {
    setActiveFilters((prev) => {
      const updatedBrands = prev.brand.includes(brand) ? prev.brand.filter((b) => b !== brand) : [...prev.brand, brand]

      return {
        ...prev,
        brand: updatedBrands,
      }
    })
  }

  const handlePriceChange = (values: [number, number]) => {
    setActiveFilters((prev) => ({
      ...prev,
      priceRange: values,
    }))
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
  }

  const handleClearAllFilters = () => {
    setActiveFilters({
      category: [],
      condition: [],
      size: [],
      color: [],
      brand: [],
      priceRange: [500, 2500],
    })
    setSortBy("newest")
  }

  // Count total active filters for badge
  const totalActiveFilters =
    activeFilters.category.length +
    activeFilters.condition.length +
    activeFilters.size.length +
    activeFilters.color.length +
    activeFilters.brand.length +
    (activeFilters.priceRange[0] !== 500 || activeFilters.priceRange[1] !== 2500 ? 1 : 0)

  return (
    <div className="bg-[#FED9DA]/10 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Shop</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Discover unique second-hand pieces curated by our community of style enthusiasts and influencers.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                {totalActiveFilters > 0 && (
                  <Button
                    variant="ghost"
                    className="text-sm text-[#4C0112] hover:text-[#4C0112]/80"
                    onClick={handleClearAllFilters}
                  >
                    Clear all
                  </Button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={`category-${category}`}
                        checked={activeFilters.category.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                        className="border-gray-300"
                      />
                      <Label htmlFor={`category-${category}`} className="ml-2 text-sm font-normal">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Condition */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Condition</h3>
                <div className="space-y-2">
                  {conditions.map((condition) => (
                    <div key={condition} className="flex items-center">
                      <Checkbox
                        id={`condition-${condition}`}
                        checked={activeFilters.condition.includes(condition)}
                        onCheckedChange={() => handleConditionChange(condition)}
                        className="border-gray-300"
                      />
                      <Label htmlFor={`condition-${condition}`} className="ml-2 text-sm font-normal">
                        {condition}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Size */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="space-y-2">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center">
                      <Checkbox
                        id={`size-${size}`}
                        checked={activeFilters.size.includes(size)}
                        onCheckedChange={() => handleSizeChange(size)}
                        className="border-gray-300"
                      />
                      <Label htmlFor={`size-${size}`} className="ml-2 text-sm font-normal">
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Color */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="grid grid-cols-2 gap-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center">
                      <Checkbox
                        id={`color-${color}`}
                        checked={activeFilters.color.includes(color)}
                        onCheckedChange={() => handleColorChange(color)}
                        className="border-gray-300"
                      />
                      <Label htmlFor={`color-${color}`} className="ml-2 text-sm font-normal">
                        {color}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Brand */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Brand</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={activeFilters.brand.includes(brand)}
                        onCheckedChange={() => handleBrandChange(brand)}
                        className="border-gray-300"
                      />
                      <Label htmlFor={`brand-${brand}`} className="ml-2 text-sm font-normal">
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <div className="space-y-6">
                  <Slider
                    defaultValue={activeFilters.priceRange}
                    min={500}
                    max={2500}
                    step={100}
                    onValueChange={(values) => handlePriceChange(values as [number, number])}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">₹{activeFilters.priceRange[0]}</span>
                    <span className="text-sm">₹{activeFilters.priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          <div className="lg:hidden mb-4">
            <div className="flex gap-3">
              <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 bg-white">
                    <SlidersHorizontal size={16} />
                    Filters
                    {totalActiveFilters > 0 && (
                      <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#4C0112] text-[10px] font-medium text-white">
                        {totalActiveFilters}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:max-w-md overflow-y-auto">
                  <div className="flex items-center justify-between py-2">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    {totalActiveFilters > 0 && (
                      <Button
                        variant="ghost"
                        className="text-sm text-[#4C0112] hover:text-[#4C0112]/80"
                        onClick={handleClearAllFilters}
                      >
                        Clear all
                      </Button>
                    )}
                  </div>

                  <div className="py-4 space-y-6">
                    {/* Categories */}
                    <div>
                      <h3 className="text-sm font-medium mb-3">Category</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center">
                            <Checkbox
                              id={`mobile-category-${category}`}
                              checked={activeFilters.category.includes(category)}
                              onCheckedChange={() => handleCategoryChange(category)}
                              className="border-gray-300"
                            />
                            <Label htmlFor={`mobile-category-${category}`} className="ml-2 text-sm font-normal">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Condition */}
                    <div>
                      <h3 className="text-sm font-medium mb-3">Condition</h3>
                      <div className="space-y-2">
                        {conditions.map((condition) => (
                          <div key={condition} className="flex items-center">
                            <Checkbox
                              id={`mobile-condition-${condition}`}
                              checked={activeFilters.condition.includes(condition)}
                              onCheckedChange={() => handleConditionChange(condition)}
                              className="border-gray-300"
                            />
                            <Label htmlFor={`mobile-condition-${condition}`} className="ml-2 text-sm font-normal">
                              {condition}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Size */}
                    <div>
                      <h3 className="text-sm font-medium mb-3">Size</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {sizes.map((size) => (
                          <div key={size} className="flex items-center">
                            <Checkbox
                              id={`mobile-size-${size}`}
                              checked={activeFilters.size.includes(size)}
                              onCheckedChange={() => handleSizeChange(size)}
                              className="border-gray-300"
                            />
                            <Label htmlFor={`mobile-size-${size}`} className="ml-2 text-sm font-normal">
                              {size}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Color */}
                    <div>
                      <h3 className="text-sm font-medium mb-3">Color</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {colors.map((color) => (
                          <div key={color} className="flex items-center">
                            <Checkbox
                              id={`mobile-color-${color}`}
                              checked={activeFilters.color.includes(color)}
                              onCheckedChange={() => handleColorChange(color)}
                              className="border-gray-300"
                            />
                            <Label htmlFor={`mobile-color-${color}`} className="ml-2 text-sm font-normal">
                              {color}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Brand */}
                    <div>
                      <h3 className="text-sm font-medium mb-3">Brand</h3>
                      <div className="space-y-2">
                        {brands.map((brand) => (
                          <div key={brand} className="flex items-center">
                            <Checkbox
                              id={`mobile-brand-${brand}`}
                              checked={activeFilters.brand.includes(brand)}
                              onCheckedChange={() => handleBrandChange(brand)}
                              className="border-gray-300"
                            />
                            <Label htmlFor={`mobile-brand-${brand}`} className="ml-2 text-sm font-normal">
                              {brand}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Price Range */}
                    <div>
                      <h3 className="text-sm font-medium mb-3">Price Range</h3>
                      <div className="space-y-6">
                        <Slider
                          defaultValue={activeFilters.priceRange}
                          min={500}
                          max={2500}
                          step={100}
                          onValueChange={(values) => handlePriceChange(values as [number, number])}
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">₹{activeFilters.priceRange[0]}</span>
                          <span className="text-sm">₹{activeFilters.priceRange[1]}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={() => setMobileFiltersOpen(false)} className="flex-1 mr-2">
                      Cancel
                    </Button>
                    <Button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="flex-1 ml-2 bg-[#4C0112] hover:bg-[#4C0112]/90"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort dropdown for mobile and desktop */}
              <Select value={sortBy} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Active filters */}
            {totalActiveFilters > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {activeFilters.category.map((category) => (
                  <div
                    key={`filter-${category}`}
                    className="flex items-center bg-[#FED9DA]/50 text-[#4C0112] rounded-full px-3 py-1 text-sm"
                  >
                    {category}
                    <button onClick={() => handleCategoryChange(category)} className="ml-1 focus:outline-none">
                      <X size={14} />
                    </button>
                  </div>
                ))}
                {activeFilters.condition.map((condition) => (
                  <div
                    key={`filter-${condition}`}
                    className="flex items-center bg-[#FED9DA]/50 text-[#4C0112] rounded-full px-3 py-1 text-sm"
                  >
                    {condition}
                    <button onClick={() => handleConditionChange(condition)} className="ml-1 focus:outline-none">
                      <X size={14} />
                    </button>
                  </div>
                ))}
                {/* More active filters would go here */}
                {activeFilters.size.map((size) => (
                  <div
                    key={`filter-${size}`}
                    className="flex items-center bg-[#FED9DA]/50 text-[#4C0112] rounded-full px-3 py-1 text-sm"
                  >
                    {size}
                    <button onClick={() => handleSizeChange(size)} className="ml-1 focus:outline-none">
                      <X size={14} />
                    </button>
                  </div>
                ))}
                {activeFilters.color.map((color) => (
                  <div
                    key={`filter-${color}`}
                    className="flex items-center bg-[#FED9DA]/50 text-[#4C0112] rounded-full px-3 py-1 text-sm"
                  >
                    {color}
                    <button onClick={() => handleColorChange(color)} className="ml-1 focus:outline-none">
                      <X size={14} />
                    </button>
                  </div>
                ))}
                {activeFilters.brand.map((brand) => (
                  <div
                    key={`filter-${brand}`}
                    className="flex items-center bg-[#FED9DA]/50 text-[#4C0112] rounded-full px-3 py-1 text-sm"
                  >
                    {brand}
                    <button onClick={() => handleBrandChange(brand)} className="ml-1 focus:outline-none">
                      <X size={14} />
                    </button>
                  </div>
                ))}
                {(activeFilters.priceRange[0] !== 500 || activeFilters.priceRange[1] !== 2500) && (
                  <div className="flex items-center bg-[#FED9DA]/50 text-[#4C0112] rounded-full px-3 py-1 text-sm">
                    ₹{activeFilters.priceRange[0]} - ₹{activeFilters.priceRange[1]}
                    <button
                      onClick={() => setActiveFilters((prev) => ({ ...prev, priceRange: [500, 2500] }))}
                      className="ml-1 focus:outline-none"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Products */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters to find what you're looking for.</p>
                <Button onClick={handleClearAllFilters} className="bg-[#4C0112] hover:bg-[#4C0112]/90">
                  Clear all filters
                </Button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">
                    Showing <span className="font-medium">{filteredProducts.length}</span> products
                  </p>
                  <div className="hidden lg:block">
                    <Select value={sortBy} onValueChange={handleSortChange}>
                      <SelectTrigger className="w-[200px] bg-white">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <ProductGrid products={filteredProducts} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

