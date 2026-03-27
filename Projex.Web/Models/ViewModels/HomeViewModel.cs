namespace Projex.Web.Models.ViewModels
{
    public class HomeViewModel
    {
        public List<Project> FeaturedProjects { get; set; } = new();
        public List<TeamMember> Team { get; set; } = new();
    }
}
