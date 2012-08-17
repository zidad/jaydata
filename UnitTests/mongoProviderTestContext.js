$data.Entity.extend('$test.Item', {
    Id: { type: 'id', computed: true, key: true },
    Key: { type: 'string' },
    Value: { type: 'string' },
    Rank: { type: 'int' },
    CreatedAt: { type: 'datetime' },
    ForeignKey: { type: 'id' }
});

$data.Entity.extend('$test.ComplexValue', {
    Value: { type: 'string' },
    Rank: { type: 'int' }
});

/*$data.Entity.extend('$test.MoreComplexValue', {
    Value: { type: 'string' },
    Rank: { type: 'int' },
    Child: { type: '$test.ComplexValue' }
});*/

$data.Entity.extend('$test.ComplexItem', {
    Id: { type: 'id', computed: true, key: true },
    Key: { type: 'string' },
    Value: { type: '$test.ComplexValue' }
});

/*$data.Entity.extend('$test.MoreComplexItem', {
    Id: { type: 'id', computed: true, key: true },
    Key: { type: 'string' },
    Value: { type: '$test.MoreComplexValue' },
    ValueChild: { type: '$test.ComplexValue' }
});*/

$data.Entity.extend('$test.ObjectItem', {
    Id: { type: 'id', computed: true, key: true },
    Key: { type: 'string' },
    Value: { type: 'Object' }
});

$data.Entity.extend('$test.ArrayItem', {
    Id: { type: 'id', computed: true, key: true },
    Key: { type: 'string' },
    Values: { type: 'Array', elementType: 'string' },
    Rank: { type: 'int' }
});

$data.Entity.extend('$test.ArrayComplexItem', {
    Id: { type: 'string', computed: true, key: true },
    Key: { type: 'string' },
    Values: { type: 'Array', elementType: '$test.ComplexValue' },
    Rank: { type: 'int' }
});

$data.EntityContext.extend('$test.Context', {
    Items: { type: $data.EntitySet, elementType: $test.Item },
    ComplexItems: { type: $data.EntitySet, elementType: $test.ComplexItem },
    //MoreComplexItems: { type: $data.EntitySet, elementType: $test.MoreComplexItem },
    ObjectItems: { type: $data.EntitySet, elementType: $test.ObjectItem },
    ArrayItems: { type: $data.EntitySet, elementType: $test.ArrayItem },
    ArrayComplexItems: { type: $data.EntitySet, elementType: $test.ArrayComplexItem }
});
