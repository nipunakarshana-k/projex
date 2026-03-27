using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projex.Web.Data;
using Projex.Web.Models;
using Projex.Web.Models.ViewModels;

namespace Projex.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;

        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var vm = new HomeViewModel
            {
                FeaturedProjects = await _context.Projects
                    .Where(p => p.IsFeatured)
                    .OrderBy(p => p.DisplayOrder)
                    .ToListAsync(),
                Team = await _context.TeamMembers
                    .Where(t => t.IsActive)
                    .OrderBy(t => t.DisplayOrder)
                    .ToListAsync()
            };
            return View(vm);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
