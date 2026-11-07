import json, os, time, urllib.request, urllib.parse
os.makedirs("out", exist_ok=True)
S, W_, N, E = -38.6385, 145.7205, -38.6290, 145.7350
q = f"""[out:json][timeout:90];
(
  way["building"]({S},{W_},{N},{E}); relation["building"]({S},{W_},{N},{E});
  way["highway"]({S},{W_},{N},{E});
  way["leisure"]({S},{W_},{N},{E}); way["landuse"]({S},{W_},{N},{E}); relation["landuse"]({S},{W_},{N},{E});
  way["natural"]({S},{W_},{N},{E}); relation["natural"]({S},{W_},{N},{E});
  way["amenity"]({S},{W_},{N},{E}); way["man_made"]({S},{W_},{N},{E}); way["barrier"]({S},{W_},{N},{E}); way["area:highway"]({S},{W_},{N},{E});
  node["amenity"]({S},{W_},{N},{E}); node["shop"]({S},{W_},{N},{E}); node["tourism"]({S},{W_},{N},{E}); node["natural"]({S},{W_},{N},{E});
  node["man_made"]({S},{W_},{N},{E}); node["highway"]({S},{W_},{N},{E}); node["leisure"]({S},{W_},{N},{E}); node["office"]({S},{W_},{N},{E}); node["historic"]({S},{W_},{N},{E});
);
out body; >; out skel qt;"""
for host in ("https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter", "https://maps.mail.ru/osm/tools/overpass/api/interpreter"):
    try:
        req = urllib.request.Request(host, data=urllib.parse.urlencode({"data": q}).encode(), headers={"User-Agent": "AwesomeNews town model (github.com/Ashley-Pettit/awesome-news)"})
        d = urllib.request.urlopen(req, timeout=120).read()
        open("out/inverloch-osm.json", "wb").write(d)
        print("ok", host, len(d)); break
    except Exception as e:
        print("fail", host, e); time.sleep(3)
