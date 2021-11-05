var n = this.input.toString().replace(/([^0-9\.])/g, '');
if (
    ((n = n.replace(/(\.)+?$/, '')),
    (n = r.default.toNumber(n, 2)),
    n <= 0 || r.default.isNaN(n))
)
    return !1;
'neto' === this.convert_from &&
    (n = (function (n, t, i, e) {
        var r = l.TABLAS_SUBSIDIO[t][i],
            a = l.TABLAS_ISR[t][i];
        if (!0 === e) {
            var o = r.map(function (t) {
                var i = n - t.cantidad;
                return a
                    .map(function (n) {
                        var e = {
                            tab: n,
                            sub: t,
                            bruto:
                                ((n.lim_inf * n.perc) / 100 - n.cuota - i) /
                                (n.perc / 100 - 1),
                        };
                        return null === n.lim_sup
                            ? f(
                                  f({}, e),
                                  {},
                                  {
                                      diff_sup: e.bruto,
                                  }
                              )
                            : f(
                                  f({}, e),
                                  {},
                                  {
                                      diff_sup: n.lim_sup - i,
                                  }
                              );
                    })
                    .filter(function (n) {
                        var t = n.diff_sup,
                            i = n.tab;
                        return t >= 0 || null === i.lim_sup;
                    });
            });
            return o
                .flat()
                .map(function (n) {
                    return f(
                        f({}, n),
                        {},
                        {
                            diff_inf: n.bruto - n.tab.lim_inf,
                        }
                    );
                })
                .filter(function (n) {
                    var t = n.diff_inf,
                        i = n.tab;
                    return t >= 0 || null === i.lim_sup;
                })
                .filter(function (n) {
                    var t = n.bruto,
                        i = n.sub,
                        e = n.tab;
                    return (
                        null === i.lim_sup ||
                        null === e.lim_sup ||
                        (!(i.lim_inf > t) && i.lim_sup - t >= 0)
                    );
                })
                .filter(function (n) {
                    return n.bruto >= 0;
                })
                .filter(function (n) {
                    var t = n.bruto,
                        i = n.tab;
                    return i.lim_sup > t || null === i.lim_sup;
                })
                .filter(function (n) {
                    var t = n.bruto,
                        i = n.sub;
                    return i.lim_sup > t || null === i.lim_sup;
                })
                .map(function (n) {
                    return (
                        n.diff_sup, n.diff_inf, c(n, ['diff_sup', 'diff_inf'])
                    );
                })
                .sort(function (n, t) {
                    return t.diff_inf - n.diff_inf;
                })[0];
        }
        return a
            .map(function (t) {
                var i = {
                    tab: t,
                    bruto:
                        ((t.lim_inf * t.perc) / 100 - t.cuota - n) /
                        (t.perc / 100 - 1),
                };
                return null === t.lim_sup
                    ? f(
                          f({}, i),
                          {},
                          {
                              diff: t.lim_inf,
                          }
                      )
                    : f(
                          f({}, i),
                          {},
                          {
                              diff: t.lim_sup - n,
                          }
                      );
            })
            .filter(function (n) {
                var t = n.diff,
                    i = c(n, ['diff']);
                return t >= 0 || null === i.lim_sup;
            })
            .sort(function (n, t) {
                return t.bruto - n.bruto;
            })[0];
    })(n, this.year, this.periodo, this.subsidio).bruto);
return (
    (this.isr = new l({
        periodo: this.periodo,
        ingresos: n,
        subsidio: this.subsidio,
        year: this.year,
    })),
    (this.isr = this.isr.calc()),
    n
);
