$C("$data.oDataParser.ObjectLiteralBuilderVisitor", $data.Expressions.EntityExpressionVisitor, null, {
    constructor: function(){
        this.deep = 0;
    },
    VisitPropertyExpression: function (expression, context) {
        var objectLiteral = context;
        if (expression.expression instanceof $data.Expressions.PropertyExpression) {
            this.deep++;
            objectLiteral = this.Visit(expression.expression, objectLiteral);
            this.deep--;
        }

        if (objectLiteral.members){
            var objectFieldExpression = objectLiteral.members.filter(function (member) { return member.fieldName === expression.member.value; })[0];
            if (!objectFieldExpression) {
                if (this.deep > 0) {
                    objectFieldExpression = new $data.Expressions.ObjectFieldExpression(expression.member.value, new $data.Expressions.ObjectLiteralExpression([]));
                } else {
                    objectFieldExpression = new $data.Expressions.ObjectFieldExpression(expression.member.value, expression);
                }
                objectLiteral.members.push(objectFieldExpression);
            }

            return objectFieldExpression.expression;
        }
    }
});
