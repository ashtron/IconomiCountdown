$("document").ready(function() {
  $('#clock').countdown('2017/08/01', function(event) {
    $(this).html(`${event.strftime('%D days %H hours %M minutes and %S seconds')} until release`);
  });

  function getData() {
    $.get("https://api.coinmarketcap.com/v1/ticker/iconomi/", function(data) {
      var usdPrice = data[0]["price_usd"];
      var btcPrice = data[0]["price_btc"];
      var volume = data[0]["24h_volume_usd"];
      var percentChange24h = data[0]["percent_change_24h"];
      var percentChange7d = data[0]["percent_change_7d"];
      var marketCap = data[0]["market_cap_usd"];
      var rank = data[0]["rank"];

      $(".usd-price").text(`Price (USD): $${format(usdPrice)}`);
      $(".btc-price").text(`Price (BTC): ${btcPrice}`);
      $(".volume").text(`Volume: $${format(volume)}`);
      $(".percent-change-24h").text(`Percent Change (24h): ${format(percentChange24h)}%`);
      $(".percent-change-7d").text(`Percent Change(7d): ${format(percentChange7d)}%`);
      $(".market-cap").text(`Market Cap: $${format(marketCap)} (Rank: ${rank})`);
    });
  }

  function format(num) {
    num = Number(num);
    return num.toLocaleString();
  }

  getData();
});
