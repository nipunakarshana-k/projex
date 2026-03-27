using Projex.Web.Models;

namespace Projex.Web.Data
{
    public static class SeedData
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            if (!context.TeamMembers.Any())
            {
                context.TeamMembers.AddRange(
                    new TeamMember
                    {
                        Name = "Eng. Suranga Palihawadana",
                        Title = "Founder & Principal Advisor (Engineering)",
                        Credentials = "PMP (USA) | Chartered Engineer | MIE (SL) | MIE (Aus) | International Professional Engineer – Sri Lanka & Australia | PG. Dip. Construction Management | B.Sc. Engineering",
                        Bio = "Suranga is the driving force behind Project Excellence Pvt Ltd, bringing over 17 years of multifaceted experience across Sri Lanka, Singapore, and Australia. His leadership blends strategic advisory insight, project governance discipline, and commercial acumen, making him a trusted partner for clients who demand clarity, protection, and confidence in their project decisions.\n\nAs a specialist in client-side advisory, Suranga guides owners and investors through complex design, commercial, and delivery environments — ensuring decisions are well-informed, risks are controlled early, and project objectives remain aligned at all times. His international exposure brings a deeper understanding of global standards, stakeholder dynamics, contract practices, and the structured governance models used in mature construction markets.\n\nWith an engineering foundation and extensive hands-on project delivery experience, Suranga offers a unique perspective that blends technical evaluation, cost intelligence, and practical execution.",
                        DisplayOrder = 1,
                        IsActive = true
                    },
                    new TeamMember
                    {
                        Name = "Eng. (To Be Announced)",
                        Title = "Founder & Principal (Procurement)",
                        Credentials = "Procurement Specialist",
                        Bio = "Details to be provided. This position leads procurement strategy and advisory services at Project Excellence Pvt Ltd.",
                        DisplayOrder = 2,
                        IsActive = true
                    }
                );
            }

            if (!context.Projects.Any())
            {
                context.Projects.AddRange(
                    new Project
                    {
                        Name = "No. 77, Horton Place",
                        Location = "Colombo 07, Sri Lanka",
                        Client = "Samudhi Group, Maligawatta Road, Colombo 10",
                        Role = "Client Advisory · Project Management",
                        Status = "Ongoing",
                        Category = "Residential",
                        Overview = "A prestigious residential development located in the heart of Colombo 07, one of Sri Lanka's most sought-after addresses. The project represents a significant investment in high-quality residential construction, demanding the highest standards of advisory and management.",
                        Contribution = "We provided strategic client advisory, coordinated design consultants, reviewed technical and commercial risks, and supported critical decision-making to ensure the project aligned with cost, time, and quality expectations.",
                        IsFeatured = true,
                        DisplayOrder = 1
                    }
                );
            }

            context.SaveChanges();
        }
    }
}
