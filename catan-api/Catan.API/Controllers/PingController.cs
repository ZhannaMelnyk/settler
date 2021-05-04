namespace Catan.API.Controllers
{
	using Microsoft.AspNetCore.Mvc;

	using Logic;

	[ApiController]
	[Route("[controller]")]
	public class PingController : ControllerBase
	{
		[HttpGet]
		public IActionResult Get()
		{
			return Ok("pong");
		}
	}
}
