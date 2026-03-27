using System.ComponentModel.DataAnnotations;

namespace Projex.Web.Models
{
    public class TeamMember
    {
        public int Id { get; set; }

        [Required]
        [StringLength(150)]
        public string Name { get; set; } = string.Empty;

        [StringLength(200)]
        public string? Title { get; set; }

        [StringLength(500)]
        public string? Credentials { get; set; }

        public string? Bio { get; set; }

        [StringLength(200)]
        public string? ImageUrl { get; set; }

        [StringLength(100)]
        public string? LinkedIn { get; set; }

        public int DisplayOrder { get; set; } = 0;
        public bool IsActive { get; set; } = true;
    }
}
