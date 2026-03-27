using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projex.Web.Data;

namespace Projex.Web.Controllers
{
    public class AboutController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AboutController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var team = await _context.TeamMembers
                .Where(t => t.IsActive)
                .OrderBy(t => t.DisplayOrder)
                .ToListAsync();
            return View(team);
        }
    }
}
