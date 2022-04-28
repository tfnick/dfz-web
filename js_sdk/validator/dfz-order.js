// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "surname": {
    "rules": [
      {
        "required": true,
        "errorMessage": "{label}不能为空"
      },
      {
        "format": "string"
      },
      {
        "maxLength": 2,
        "errorMessage": "{label}不能多于 {maxLength} 个字"
      }
    ],
    "label": "宝宝姓氏"
  },
  "gender": {
    "rules": [
      {
        "required": true,
        "errorMessage": "{label}必选"
      },
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "男宝",
            "value": "M"
          },
          {
            "text": "女宝",
            "value": "F"
          }
        ]
      }
    ],
    "label": "宝宝性别"
  },
  "birthday": {
    "rules": [
      {
        "required": true,
        "errorMessage": "{label}必选"
      },
      {
        "format": "string"
      }
    ],
    "label": "宝宝生日"
  }
}

const enumConverter = {
  "gender_valuetotext": {
    "M": "男宝",
    "F": "女宝"
  },
  "status_valuetotext": {
    "1": "待处理",
    "2": "处理中",
	"3": "已完成",
	"-1": "重处理"
  }
}

function filterToWhere(filter, command) {
  let where = {}
  for (let field in filter) {
    let { type, value } = filter[field]
    switch (type) {
      case "search":
        if (typeof value === 'string' && value.length) {
          where[field] = new RegExp(value)
        }
        break;
      case "select":
        if (value.length) {
          let selectValue = []
          for (let s of value) {
            selectValue.push(command.eq(s))
          }
          where[field] = command.or(selectValue)
        }
        break;
      case "range":
        if (value.length) {
          let gt = value[0]
          let lt = value[1]
          where[field] = command.and([command.gte(gt), command.lte(lt)])
        }
        break;
      case "date":
        if (value.length) {
          let [s, e] = value
          let startDate = new Date(s)
          let endDate = new Date(e)
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
      case "timestamp":
        if (value.length) {
          let [startDate, endDate] = value
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
    }
  }
  return where
}

export { validator, enumConverter, filterToWhere }
