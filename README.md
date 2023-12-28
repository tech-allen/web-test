
# Endpoint

```bash  
POST /users/user-id
{
  "id1": ${id1},
  "id2": ${id2}
}
```

# Sequence Diagram

![Sequence Diagram](sequence-diagram.png)

# 进度
1. 判断是否存在，目前逻辑是有点问题的，那个 Promise<User[]> 我还没太搞懂。
2. dockerfile 可以不看，没调通
