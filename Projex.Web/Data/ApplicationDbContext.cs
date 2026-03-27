using Microsoft.EntityFrameworkCore;
using Projex.Web.Models;

namespace Projex.Web.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<ContactMessage> ContactMessages { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<TeamMember> TeamMembers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Project>().HasIndex(p => p.DisplayOrder);
            modelBuilder.Entity<TeamMember>().HasIndex(t => t.DisplayOrder);
            modelBuilder.Entity<ContactMessage>().HasIndex(c => c.SubmittedAt);
        }
    }
}
