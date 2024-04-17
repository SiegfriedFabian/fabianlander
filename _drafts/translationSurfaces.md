---
layout: post
title:  "Translation Surfaces"
date:   2024-04-15 16:00:00 +0100
categories: translation surfaces
permalink: "/translationsurfaces.html"
---
<!-- <div style="text-align: center;">
    <img src="assets/images/Rauzy-Veech/RV_Teichmflow.png" alt="Alt text" width="600" />
</div> -->


$$ 
\newcommand{\vec}[1]{\mathbf{#1}}
\newcommand{\RR}[1]{\mathbb{R}^{#1}}
\newcommand{\RR}{\mathbb{R}}
\newcommand{\pitop}{\pi^{\text{top}}}
\newcommand{\pibot}{\pi^{\text{bot}}}
\newcommand{\alphatop}{\alpha^{\text{top}}}
\newcommand{\alphabot}{\alpha^{\text{bot}}}
\newcommand{\Acal}{\mathcal{A}}
\newcommand{\RV}{\mathcal{RV}}
\newcommand{\lambdab}{\left(\lambda_{i}\right)}
$$

**UNDER CONSTRUCTION**

The basis if this blogpost is a lecture called _translation surfaces_ held by Prof. Dr. Pozetti and Dr. Randecker in Heidelberg in 2020. I wanted to add more detail regarding the calculus on Riemann surfaces which is needed to make sense of the term _holomorphic differential_. We try to introduce it using few prerequesites. Here is a list of resources that are used in this blog post: 


# Introduction

### Abelian Differentials on a Riemann Surface

An **Abelian differential** on a Riemann surface $X$ refers to a holomorphic one-form. Given that $X$ is a complex manifold of dimension one, an Abelian differential can be locally represented as

$$
\omega = f(z) \, dz,
$$

where $f(z)$ is a holomorphic function and $dz$ is the differential of the local coordinate $z$.

Abelian differentials are also integral to the formulation of various theorems and tools in the theory of Riemann surfaces, such as the Riemann-Roch theorem and the theory of moduli spaces. They serve as building blocks for defining meromorphic functions and exploring the intricate relationship between differential geometry and complex analysis on these surfaces.


<div class="theorem">
    <strong>Definition.</strong> An Abelian differential $\omega$ on a Riemann Surface $X$ is a holomorphic one form, i.e. in charts $(U,z)$ it is of the form $$\omega = f(z)dz$$ where $f$ is holomorphic on $z(U)$.


<div class="proof">
<strong>Proof.</strong>  

        
<!-- Here is an illustration of that fact for the Bot-Case. 

<div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
<img src="assets/images/Rauzy-Veech/codeMapSigma2.png" alt="Alt text" width="800" />
    <br>
<span style="font-size: 14px; color: grey;">
<br>
Illustration of the substitution rule $\sigma^\text{bot}$ for an IET $T$ with one corresponding Rauzy-Veech (Bot-)induction step $T' = \mathcal{RV}(T)$. We enter $I_B$ one step earlier under $T'$ than under $T$, i.e. $B \mapsto AB$.</span>
</div>
    &#x25A0;
</div>
</div> -->
 

