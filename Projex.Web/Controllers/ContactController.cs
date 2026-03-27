using Microsoft.AspNetCore.Mvc;
using Projex.Web.Data;
using Projex.Web.Models;

namespace Projex.Web.Controllers
{
    public class ContactController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ContactController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Index() => View(new ContactMessage());

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index(ContactMessage model)
        {
            if (!ModelState.IsValid)
                return View(model);

            model.SubmittedAt = DateTime.UtcNow;
            model.IsRead = false;

            _context.ContactMessages.Add(model);
            await _context.SaveChangesAsync();

            TempData["SuccessMessage"] = "Thank you for reaching out. We will contact you shortly.";
            return RedirectToAction(nameof(Index));
        }

        public IActionResult Success() => View();
    }
}
