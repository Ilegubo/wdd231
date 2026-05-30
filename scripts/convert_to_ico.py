from PIL import image

image.load("../images/screenshot.pht")

image.save("screenshot.ico", format="ICO", sizes=["16x16"])