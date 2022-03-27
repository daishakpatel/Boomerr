import csv

def budget_string(price):
  if price=="Under $500":
    return 'a'
  elif price == "$500-$750":
    return 'b'
  elif price == "$750-$1000":
    return 'c'
  elif price=="$1000-$1500":
    return 'd'
  elif price == "$1500-$3000":
    return 'e'
  elif price=="$3000-$5000":
    return 'f'
  elif price == "$5000+":
    return 'g'

def budget(price):
  if price<500:
    return 'a'
  elif price>=500 and price<750:
    return 'b'
  elif price>=750 and price<1000:
    return 'c'
  elif price>=1000 and price<1500:
    return 'd'
  elif price>=1500 and price <3000:
    return 'e'
  elif price>=3000 and price<5000:
    return 'f'
  else:
    return 'g'
#with open("https://docs.google.com/spreadsheets/d/e/2PACX-1vTRcy2nMT8_Di8EbvwYGrMGqtMwdq6_IDVmjDL-2vo7DAZCwHJB8LMM5T3B3xbtw7Yf8agaKmKV97OB/pub?output=csv","r")

import requests
from contextlib import closing


url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTRcy2nMT8_Di8EbvwYGrMGqtMwdq6_IDVmjDL-2vo7DAZCwHJB8LMM5T3B3xbtw7Yf8agaKmKV97OB/pub?output=csv"

import urllib.request

#url = 'http://winterolympicsmedals.com/medals.csv'
response = urllib.request.urlopen(url)
lines = [l.decode('utf-8') for l in response.readlines()]
cr = csv.reader(lines)
laptops=[]

for i in cr:
  #print(i)
  continue

with open("Data_lap.csv","r") as file:
  reader=csv.reader(file)
  next(reader)
  for loop in reader:
    if budget_string(i[1]) == budget(float(loop[3])):
      laptops.append(loop)
    if i[2].lower() != loop[0].lower():
      if loop in laptops:
        laptops.remove(loop)
    if i[3].lower() != loop[1].lower():
      if loop in laptops:
        laptops.remove(loop)
    if loop[1].lower() == 'laptop':
      if loop in laptops:
        if 'Accounting' in i[4]:
          if loop[14]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Data Science and Analytics' in i[4]:
          if loop[15]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Marketing' in i[4]:
          if loop[16]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Video/Photo editing' in i[4]:
          if loop[17]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Programming' in i[4]:
          if loop[9]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Business Field' in i[4]:
          if loop[10]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Gaming' in i[4]:
          if loop[11]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Creativity & Development' in i[4]:
          if loop[12]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Productivity' in i[4]:
          if loop[13]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Entertaintment' in i[4]:
          if loop[18]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Utility Applications' in i[4]:
          if loop[19]=='n':
            laptops.remove(loop)
      if loop in laptops:
        if 'Web Surfing' in i[4]:
          if loop[20]=='n':
            laptops.remove(loop)

devices=[]

for device in laptops:
  devices.append(device[2:6])
print(devices)

import sys
sys.stdout = open('output.txt', 'w')

print("{:<25} {:<0} {:<15} {:<10} {:<10}".format ("Model",'', "Price (in $)", "RAM", "SSD Storage"))

print()

for device[2], device[3], device[4], device[5] in devices:
  print("{:<25} {:<0} {:<15} {:<10} {:<10}".format (device[2],'$' , device[3], device[4], device[5]))