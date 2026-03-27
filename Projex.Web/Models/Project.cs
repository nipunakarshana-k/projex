using System.ComponentModel.DataAnnotations;

namespace Projex.Web.Models
{
    public class Project
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Name { get; set; } = string.Empty;

        [StringLength(300)]
        public string? Location { get; set; }

        [StringLength(200)]
        public string? Client { get; set; }

        [StringLength(500)]
        public string? Role { get; set; }

        [StringLength(50)]
        public string? Status { get; set; }

        [StringLength(100)]
        public string? Category { get; set; }

        public string? Overview { get; set; }
        public string? Contribution { get; set; }

        [StringLength(200)]
        public string? ImageUrl { get; set; }

        public bool IsFeatured { get; set; } = false;
        public int DisplayOrder { get; set; } = 0;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
