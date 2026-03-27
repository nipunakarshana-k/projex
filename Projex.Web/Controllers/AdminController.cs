using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projex.Web.Data;

namespace Projex.Web.Controllers
{
    public class AdminController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var messages = await _context.ContactMessages
                .OrderByDescending(m => m.SubmittedAt)
                .ToListAsync();
            return View(messages);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> MarkRead(int id)
        {
            var msg = await _context.ContactMessages.FindAsync(id);
            if (msg != null)
            {
                msg.IsRead = true;
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Index));
        }
    }
}
