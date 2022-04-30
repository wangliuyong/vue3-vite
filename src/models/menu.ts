export type Menu = {
  name:String
  children?: Menu[]
}

export type Tab = {
  name:string,
  comName:any
}

export type Com = Pick<Tab,'comName'>