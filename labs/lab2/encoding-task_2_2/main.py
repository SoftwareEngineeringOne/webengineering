#!./bin/python

import unicodedata
from tabulate import tabulate

with open("glyphs.txt", "r", encoding="utf-8") as file:
    content = file.read()

data = []

for char in content:
    data.append(["utf-8\nutf-16be\nutf-32be",
                 "u+" + str(ord(char)),
                 str(char.encode("utf-8").hex()) + "\n" + str(char.encode("utf-16be").hex()) + "\n" + str(char.encode("utf-32be").hex()),
                 unicodedata.name(char),
                 char])

print(tabulate(data,
               headers=["Encoding", "Codepoint", "Encoded Codepoint", "Name of Character", "Glyph"],
               tablefmt="grid"))