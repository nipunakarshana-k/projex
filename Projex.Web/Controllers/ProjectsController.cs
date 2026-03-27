using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projex.Web.Data;

namespace Projex.Web.Controllers
{
    public class ProjectsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ProjectsController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var projects = await _context.Projects
                .OrderBy(p => p.DisplayOrder)
                .ToListAsync();
            return View(projects);
        }

        public async Task<IActionResult> Detail(int id)
        {
            var project = await _context.Projects.FindAsync(id);
            if (project == null) return NotFound();
            return View(project);
        }
    }
}
