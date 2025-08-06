function chargerSite() {
  const input = document.getElementById("urlInput");
  let url = input.value.trim();

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  const encodedUrl = encodeURIComponent(url);

  const proxyUrl = `https://api.allorigins.win/raw?url=${encodedUrl}`;

  document.getElementById("iframe").src = proxyUrl;
}
