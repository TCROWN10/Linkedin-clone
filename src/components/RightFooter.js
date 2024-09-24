const FooterData = [
    {
        name: "About",
        href: "/"
    },
    {
        name: "Accessibility",
        href: "/"
    },
    {
        name: "Help Center",
        href: "/"
    },
    {
        name: "Privacy & Terms",
        href: "/"
    },
    {
        name: "Ad Choices",
        href: "/"
    },
    {
        name: "Advertising",
        href: "/"
    },
    {
        name: "Business Services",
        href: "/"
    },
    {
        name: "Get the LinkedIn app",
        href: "/"
    },
    {
        name: "More",
        href: "/"
    },
]

function RightFooter() {
    return (
        <div className="sticky top-0 w-72">
            <div className="flex flex-row flex-wrap justify-center gap-4 py-5 text-center text-xs text-white">
                {
                    FooterData.map((eachFooterData, index) => (
                        <a href={eachFooterData.href} className="hover:text-blue-500">{eachFooterData.name}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default RightFooter;