using Microsoft.AspNetCore.Mvc;

namespace Projex.Web.Controllers
{
    public class ServicesController : Controller
    {
        public IActionResult Index() => View();
        public IActionResult Advisory() => View();
        public IActionResult ProjectManagement() => View();
        public IActionResult DesignManagement() => View();
        public IActionResult CostConsultancy() => View();
    }
}
