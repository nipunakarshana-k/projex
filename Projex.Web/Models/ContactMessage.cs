using System.ComponentModel.DataAnnotations;

namespace Projex.Web.Models
{
    public class ContactMessage
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Full name is required")]
        [StringLength(100)]
        [Display(Name = "Full Name")]
        public string FullName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email address is required")]
        [EmailAddress(ErrorMessage = "Please enter a valid email address")]
        [StringLength(150)]
        [Display(Name = "Email Address")]
        public string Email { get; set; } = string.Empty;

        [Phone]
        [StringLength(30)]
        [Display(Name = "Phone Number")]
        public string? Phone { get; set; }

        [StringLength(150)]
        [Display(Name = "Company / Organisation")]
        public string? Company { get; set; }

        [Required(ErrorMessage = "Subject is required")]
        [StringLength(200)]
        public string Subject { get; set; } = string.Empty;

        [Required(ErrorMessage = "Message is required")]
        [StringLength(2000)]
        [Display(Name = "Your Message")]
        public string Message { get; set; } = string.Empty;

        [Display(Name = "Project Type")]
        public string? ProjectType { get; set; }

        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
        public bool IsRead { get; set; } = false;
    }
}
