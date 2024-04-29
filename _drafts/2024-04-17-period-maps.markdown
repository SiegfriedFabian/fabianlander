---
layout: post
title:  "Reading Group Notes - Basics of Hodge Theory"
date:   2024-04-17 07:34:52 +0100
permalink: "/periodmappings.html"

usemathjax: true
---

$$ 
\newcommand{\vec}[1]{\mathbf{#1}}
\newcommand{\RR}[1]{\mathbb{R}^{#1}}
\newcommand{\RR}{\mathbb{R}}
\newcommand{\CC}{\mathbb{C}}
\newcommand{\pitop}{\pi^{\text{top}}}
\newcommand{\pibot}{\pi^{\text{bot}}}
\newcommand{\alphatop}{\alpha^{\text{top}}}
\newcommand{\alphabot}{\alpha^{\text{bot}}}
\newcommand{\Acal}{\mathcal{A}}
\newcommand{\RV}{\mathcal{RV}}
\newcommand{\lambdab}{\left(\lambda_{i}\right)}
$$

This blog post offers an exploration of the discussions from our reading group, which has been focusing on *Part One: Basic Theory* from *Period Mappings and Period Domains* by James Carlson, Stefan Müller-Stach, and Chris Peters. As I am still familiarizing myself with this subject, the aim here is not only to summarize but to expand upon the key concepts and debates we’ve encountered, making them more accessible (mostly for myself). 


## References

[[1]](https://www.cambridge.org/core/books/period-mappings-and-period-domains/6D9B4C35EB9BC1B5772EEF8F9040CB86) Carlson, J., Müller-Stach, S., & Peters, C. (2017). [*Period Mappings and Period Domains*](https://www.cambridge.org/core/books/period-mappings-and-period-domains/6D9B4C35EB9BC1B5772EEF8F9040CB86). Cambridge University Press.


# 1.1 Elliptic Curves

We look at the set of solutions of equations 

$$ y^2 = p(x) $$

in two complex variables $x,y \in \CC$ and where $p$ is a polynomial of degree $d$ having distinct roots. Then 

$$ \tilde{X} = \{y^2 = p(x)\} \subset \CC^2 $$

is a Riemann surface. Now assume that $deg(p) = d$ is even and consider the projection

$$
\begin{aligned}
    \tilde{X} & \rightarrow \mathbb{C}, \\
    (x, y) & \mapsto x
\end{aligned}
$$


For large $R>0$ and $x \in \CC \setminus B_R(0)$ the set of solutions for $y^2 = p(x)$ has two components in $\tilde{X}$. Indeed, if we take the loop

$$ \gamma(t) = R\cdot e^{2 \pi i t}, t \in [0,1]$$ 

around $ \infty \in \hat{\CC}$ we have

$$ \left\{ - \sqrt{p(\gamma(t))} \right\} \cap \left\{  \sqrt{p(\gamma(t))} \right\} = \varnothing$$

...

So we define $X = \tilde{X} \cup \set{ \pm \infty}$ and extend our previous projection by

$$
\begin{aligned}
    X & \rightarrow \hat{\CC}, \\
    (x, y) & \mapsto x
\end{aligned}
$$

where $\infty$ and $-\infty$ both get mapped to $\infty \in \hat{\CC}$.
In the case where $deg(p) = d$ is odd, we set $X = \tilde{X} \cup \set{\infty}$ because any neighborhood of $\infty$ is connected:

$$ \exists s,t \in (0,2\pi] : \dots$$


As a reminder we define a double cover...

<!-- <div class="theorem">
    <strong>Definition.</strong> Let \( X \) be a topological space. A <strong>covering</strong> of \( X \) is a continuous map 
    \[
    \pi : \tilde{X} \to X
    \]
    such that for every \( x \in X \), there exists an open neighborhood \( U_x \) of \( x \) and a discrete space \( D_x \) so that 
    \[
    \pi^{-1}(U_x) = \bigsqcup_{d \in D_x} V_d 
    \]
    and each restriction \( \pi|_{V_d} : V_d \to U_x \) is a homeomorphism. The sets \( V_d \) are called <strong>sheets</strong> and are uniquely determined if \( U_x \) is connected. The set \( \pi^{-1}(x) \), called the <strong>fiber</strong> of \( x \), is discrete. If \( X \) is connected, the degree of the covering, defined as the cardinality of \( D_x \), is constant across \( X \). If \( \tilde{X} \) is path-connected, the covering is also termed a <strong>path-connected covering</strong>.
</div> -->

