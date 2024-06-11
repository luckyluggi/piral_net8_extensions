using Microsoft.Extensions.DependencyInjection;
using MudBlazor.Services;

namespace ShopPilet
{
	public class Module
	{
		public static void Main()
		{
			// this entrypoint should remain empty
		}

		public static void ConfigureServices(IServiceCollection services)
        {
            services.AddMudServices();
        }
	}
}
