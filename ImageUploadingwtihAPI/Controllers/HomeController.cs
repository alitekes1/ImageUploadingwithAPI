using System.Web.Mvc;

namespace ImageUploadingwtihAPI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public PartialViewResult ImageUploading()
        {
            return PartialView("_ImageUploading");
        }
    }
}