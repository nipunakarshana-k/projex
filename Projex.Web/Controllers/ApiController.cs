using Microsoft.AspNetCore.Mvc;
using Projex.Web.Data;
using Projex.Web.Models;
using Microsoft.EntityFrameworkCore;

namespace Projex.Web.Controllers
{
    [Route("api")]
    [ApiController]
    public class ProjexApiController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public ProjexApiController(ApplicationDbContext db) { _db = db; }

        [HttpGet("projects")]
        public async Task<IActionResult> GetProjects()
        {
            var projects = await _db.Projects.OrderBy(p => p.DisplayOrder).ToListAsync();
            return Ok(projects);
        }

        [HttpGet("projects/{id}")]
        public async Task<IActionResult> GetProject(int id)
        {
            var p = await _db.Projects.FindAsync(id);
            if (p == null) return NotFound();
            return Ok(p);
        }

        [HttpGet("team")]
        public async Task<IActionResult> GetTeam()
        {
            var team = await _db.TeamMembers.Where(t => t.IsActive).OrderBy(t => t.DisplayOrder).ToListAsync();
            return Ok(team);
        }

        [HttpPost("contact")]
        public async Task<IActionResult> SubmitContact([FromBody] ContactMessage msg)
        {
            msg.SubmittedAt = DateTime.UtcNow;
            msg.IsRead = false;
            _db.ContactMessages.Add(msg);
            await _db.SaveChangesAsync();
            return Ok(new { success = true });
        }
    }
}
