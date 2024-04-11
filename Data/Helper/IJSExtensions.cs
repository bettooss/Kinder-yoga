using Microsoft.JSInterop;

namespace KinderYoga.Data.Helper
{
	public static class IJSExtensions
	{
		public async static Task JSAlertaTest(this IJSRuntime js)
		{
			await js.InvokeVoidAsync("Alerta1");
		}
		public async static Task JSAlertaTest2(this IJSRuntime js, string mensaje)
		{
			await js.InvokeVoidAsync("Alerta2", mensaje);
		}

		//_____________________________________-

		public async static Task JSPlay(this IJSRuntime js)
		{
			await js.InvokeVoidAsync("iniPlay");
		}

		public async static Task JSStop(this IJSRuntime js)
		{
			await js.InvokeVoidAsync("iniStop");
		}


		public async static Task JSVol50(this IJSRuntime js, double Vol)
		{
			await js.InvokeVoidAsync("Vol50", Vol);
		}


    }
}
