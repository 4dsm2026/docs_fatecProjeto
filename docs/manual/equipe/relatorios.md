---
sidebar_position: 4
title: Relatórios
---

# Relatórios

A página **Relatórios** resume o atendimento e se atualiza sozinha a cada 30 segundos.

![Relatórios](/img/manual/admin-10-relatorios.webp)

## Filtros

Busca por protocolo, título, setor ou responsável, **data**, status, prioridade, nível e setor. Todos os números da página respeitam os filtros.

## Indicadores

| Indicador | O que conta |
|---|---|
| **Total** | Chamados no filtro |
| **Abertos**, **Em atendimento**, **Aguard. usuário** | Chamados em cada status |
| **Resolvidos/Encerr.** | Chamados concluídos |
| **% no prazo (SLA)** | Dos chamados concluídos que têm prazo (SLA), quantos foram concluídos dentro dele. Os chamados ainda não recebem prazo automaticamente, então este indicador fica em 0% até isso ser [implementado](https://github.com/4dsm2026/backend_fatecProjeto/issues/115) |

## Abas

- **Visão Geral**: distribuição por setor, por nível e prioridade, e por responsável.
- **SLA**: prazos de atendimento.
- **Operacional**: acompanhamento do dia a dia.

## Exportar

**Exportar CSV** baixa os chamados filtrados em uma planilha. **Atualizar** recarrega os números na hora.
