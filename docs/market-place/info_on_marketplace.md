# Azure Market Place

- What the Marketplace is and how it works
- The difference between Azure Marketplace and AppSource storefronts
- The benefits of participating in the Market place
- How to become a publisher and list your application or service
- how to grow your business

The Microsoft Azure Marketplace is an online store that offers applications and services either built on or designed to integrate with Microsoft's Azure public cloud. Customers(mostly IT pros and developers) can discover, and buy cloud software solutions built with or for Azure. Its catalog has offerings such as Virtual Machines(VMs), APIs, Solution Templates, SaaS application and consulting service offers

The products and services sold through the Microsoft Azure Marketplace come from either Microsoft directly or its technology partners. Before they become available for purchase on the Marketplace, all services and products are certified through the Microsoft Azure Certified program to ensure compatibility with the Azure public cloud.

## Benefits of participating in the MarketPlace

- Expand to new markets and segments and generate new sales opportunities.
- Enhance business value and increase deal size with existing and new customers
- Get actionable insights
- Commercial marketplace benefits

Azure Marketplace provides a market for Microsoft Partners to promote and sell products and services to Azure customers.

## Azure Marketplace and AppSource

Microsoft Partners can choose where to publish based on their target audience.

Microsoft provides two distinct cloud marketplace storefronts - Azure Marketplace and AppSource. These storefronts allow customers to find, try and buy cloud applications and services. Each storefront serves unique customer needs and enables Microsoft Partners to target their solutions or services based on the target audience.

- Select **Azure Marketplace** to target IT professionals and developers, or technical users.
- Select **AppSource** to target line-of-business decision-makers and business owners.

You have do be a member of the Microsoft Partner Network(MPN) to list your applications and services in the Azure Marketplace.

## Criterion for Publishing a Solution in Azure Marketplace

- To publish in Azure Marketplace, partners must demonstrate that their application runs on or extends Azure.
- Publishers are required to provide customers with a Service Level Agreement, privacy policy and phone and online support
- Software and services offered in the Azure Marketplace must meet at least one of the following criteria
  - Run on Microsoft Azure: The primary function of the software or service must run on Microsoft Azure
  - Deployable to Microsoft Azure: Publishers must describe in their offerings listing information how the software or service is deployed on Microsoft Azure
  - Integrate with or extend a Microsoft Azure service: In their offer listing information, publishers must describe which Azure service the software or service integrates or extends.
- Publishers must be located in a sell-from country supported by the Azure Marketplace.
- For each offering, publishers must make the offering available in at least one sell-to-country supported by the Azure Marketplace.
- Publishers must remain in good financial standing
- Publisher offerings in the Azure Marketplace must be of limited or general availability, and must have an established customer base.
- Offerings in the Azure Marketplace cannot use or depend on any product or component that is not supported, or no longer commercially available.
- Publishers must make detailed technical documentation available. The documentation needs to describe how to use their offerings on Microsoft Azure. Each offering must provide or link to such documentation in their listing information.
  Publishers must announce their availability of their offering in the Azure Marketplace in their public website, and must include hyperlinks to their offer listing pages.
- Publishers must classify each offering based on one or more classification taxonomies provided by Microsoft, including the categories described in the Offering Classification Definitions section of this document. If Microsoft considers a publisher-selected classification to be inaccurate, it reserves the right to reclassify any offering.
- If a publisher’s offering is Microsoft Azure Certified, and does not run primarily on Microsoft Azure, the publisher must make a paid version of the offering available in the Marketplace, within 90 days of publishing a free or BYOL version of the offering.

## Offer Listings

1. Publishers must include detailed offer information in their offer listing pages, which must be accurate and up-to-date.
2. Publishers may not redirect or up-sell Azure customers within their offer listing to software or services other than what is available in the Azure Marketplace.
3. Publishers may not promote within the Azure Marketplace the availability of their offerings on other cloud platforms
4. Microsoft reserves the right to edit and revise offer listing page details for quality assurance. If Microsoft makes any changes to any listing page details, Microsoft is to inform publishers before the publication of their offering listing pages in the Azure Marketplace.

## Offering Classification

- **Virtual Machine Image** - Pre-configured virtual machine (VM) image with a fully installed operating system, and one or more applications. Virtual Machine Image offerings may include a single VM image or multiple VM images tied together by a Resource Manager template. A virtual machine image (“Image”) provides the information necessary to create and deploy virtual machines in the Azure Virtual Machines service. An Image comprises an operating system, virtual hard drive, and zero or more data disk virtual hard drives. Customers can deploy any number of virtual machines from a single Image.
- **Virtual Machine Extension** - VM agents that can be added to new VMs using various options, including via REST API, the Azure portal, or Azure PowerShell cmdlets. VM Extensions can also be manually installed on existing VMs, and can be configured for either Windows Server or Linux-based VMs.
- **Service** - Fully managed services for information workers, business analysts, developers, or IT pros to use in custom application development or system management. The Marketplace supports three types of services: **Application Services** provide functionality to enable customers to quickly develop cloud scale applications on Azure. Customers must have an Azure subscription to purchase Application Services. Publishers are responsible for metering customers’ usage of Application Services and for reporting usage information to Microsoft, as detailed in the Microsoft Marketplace Publisher Agreement.
- **Web Application** - Application package that can be used to install and deploy open source or proprietary website content or management platforms in the Azure Websites Service. Web Applications must comply with the Microsoft Web Application Gallery Principles. In this Agreement, a “Web Application” is an application package used by Customers to install and deploy open source or proprietary website applications in the Azure Website Service.
- **Catalog Listing** - Offerings that are not available to Azure customers directly through the Marketplace, but the Marketplace displays a link, icon, and software/service product listing. Customers are directed to the publisher’s web site, or provided instructions on how to obtain and use the offering on Azure. A “Catalog-Only Listing” is an Offering that is not available to Customers directly through the Marketplace. Instead, a link, icon, and/or description is displayed in the Marketplace, that directs customers to your website. Furthermore, instructions are provided on how customers may obtain and use the Offering in Azure. For clarity, any software or data referenced by a Catalog-Only Listing is considered Offering Contents in this Agreement.
- **Azure Resource Manager (Resource Manager) Template** - An “Azure Resource Manager (Azure Resource Manager) Template” is a data structure that references one or more Offerings and includes metadata about the Offering(s). The data structure is associated with Listing Information. Resource Manager templates are used by the Marketplace Service to display and enable customers to deploy certain categories of Offerings. Publishers may publish ARM Templates in the Marketplace that reference multiple, distinct Offerings, including offerings published by other publishers.

## Pricing models

The following table describes the pricing models currently supported by the Azure Marketplace. An offering may include different SKUs that utilize different pricing models.

### Free

Free SKU. Customers are not charged Azure Marketplace fees for use of the offering. Prices for free SKUs may not be increased to non-zero amounts.
**Applicable to**

- Virtual Machine Images
- VM Extensions
- Services
- Resource Manager templates

### Free Trial (Try it now)

Promotional free SKU for a limited period of time. Customers are not charged Azure Marketplace fees for use of the offering through a trial period. Upon expiration of the trial period, customers are automatically charged based on standard rates for use of the offering. The Marketplace is currently not able to prevent customers from creating multiple subscriptions to Free Trial offerings. Publishers who wish to restrict the number of subscriptions customers may create for Free Trial offerings, are responsible for including appropriate restrictions in their Terms of Use.
**Applicable to**

- Virtual Machine Images
- Service

### BYOL

Bring-Your-Own-License(BYOL) SKU. If they have obtained access or use of the offering outside of the Azure Marketplace, customers are not charged Azure Marketplace fees.
**Applicable to**

- Virtual Machine Images

### Monthly Subscription

Customers are charged a fixed monthly fee for a subscription to the offering. Monthly subscriptions begin on the date of customer purchase.
**Applicable to**

- Services

### Usage-based

Customers are charged based on the extent of their use of the offering. For Virtual Machine Images, customers are charged on hourly Azure Marketplace fee, as set by publishers, for use of virtual machines deployed from the images. The hourly fee may be uniform or varied across virtual machine sizes.

For Application Services, publishers are responsible for defining the unit of measurement for billing purposes (for example, number of transactions, number of emails sent etc.) Publishers can define multiple meters for the same Application Service plan. Publishers are responsible for tracking individual customer's usage with each meter defined by the offering. They also need to report this tracking information to Microsoft on an hourly basis, using reporting mechanisms provided by Microsoft. Microsoft charges customers based on the usage information reported by publishers for the application billing period.

## References

- https://docs.microsoft.com/en-us/azure/marketplace/marketplace-faq-publisher-guide#faq-for-publishers
- https://docs.microsoft.com/en-us/legal/marketplace/participation-policy
