# 压缩nodejs项目

把一个 nodejs 项目压缩为一个文件

make nodejs project build to one js file

## install

```
npm i -g compress-entry
```


## usage

```
$ compress-entry -h

Options:
  --out-file, -f  output filename                          [default: "index.js"]
  --out-dir, -d   output directory             [default: "D:\ee\compress-entry"]
  -h, --help      Show help                                            [boolean]
  -v, --version   Show version number                                  [boolean]
```

## example

```
compress-entry -d build -f index.js entry.js
```